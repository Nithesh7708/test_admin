// Firebase Cloud Messaging Service for Admin App
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

class AdminFCMService {
  constructor() {
    this.messaging = null;
    this.currentToken = null;
    this.vapidKey = 'YOUR_VAPID_KEY'; // You'll need to add this from Firebase Console
    
    this.initializeMessaging();
  }

  async initializeMessaging() {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        this.messaging = getMessaging();
        console.log('📱 Admin FCM Service initialized');
      } catch (error) {
        console.error('❌ Error initializing Admin FCM:', error);
      }
    }
  }

  // Get FCM token from the mobile app or web browser
  async getToken() {
    try {
      // First check if we're running in a WebView (admin mobile app)
      if (window.ReactNativeWebView && window.isAdminMobileApp) {
        console.log('📱 Running in Admin WebView, requesting FCM token from mobile app...');
        
        // Request token from admin mobile app
        return new Promise((resolve) => {
          // Listen for FCM token from admin mobile app
          const handleMessage = (event) => {
            try {
              const message = JSON.parse(event.data);
              if (message.type === 'ADMIN_FCM_TOKEN' && message.token) {
                console.log('📱 Received admin FCM token from mobile app:', message.token.substring(0, 20) + '...');
                this.currentToken = message.token;
                window.removeEventListener('message', handleMessage);
                resolve(message.token);
              }
            } catch (error) {
              console.error('Error parsing Admin WebView message:', error);
            }
          };

          window.addEventListener('message', handleMessage);
          
          // Request admin FCM token from mobile app
          window.ReactNativeWebView?.postMessage(JSON.stringify({
            type: 'REGISTER_ADMIN_FCM_TOKEN'
          }));

          // Timeout after 5 seconds if no response
          setTimeout(() => {
            window.removeEventListener('message', handleMessage);
            console.warn('⚠️ Timeout waiting for admin FCM token from mobile app');
            resolve(null);
          }, 5000);
        });
      } 
      // Web browser - use Firebase messaging
      else if (this.messaging) {
        console.log('🌐 Running in web browser, requesting admin FCM token...');
        
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(this.messaging, {
            vapidKey: this.vapidKey
          });
          
          if (token) {
            console.log('🌐 Web admin FCM token obtained:', token.substring(0, 20) + '...');
            this.currentToken = token;
            return token;
          }
        } else {
          console.warn('⚠️ Admin notification permission denied');
        }
      }
      
      return null;
    } catch (error) {
      console.error('❌ Error getting admin FCM token:', error);
      return null;
    }
  }

  // Validate FCM token format
  validateFCMToken(token) {
    if (!token || typeof token !== 'string') {
      return false;
    }
    
    // Expo push token format validation
    if (token.startsWith('ExponentPushToken[') && token.endsWith(']')) {
      return true;
    }
    
    // Firebase FCM token format validation (base64-like, long string)
    if (token.length > 100 && /^[A-Za-z0-9_-]+$/.test(token)) {
      return true;
    }
    
    return false;
  }

  // Store admin FCM token in Firestore
  async storeFCMToken(userId, token, userType = 'admin') {
    if (!userId || !token) {
      console.warn('⚠️ Cannot store admin FCM token: missing userId or token');
      return false;
    }

    // Validate token format
    if (!this.validateFCMToken(token)) {
      console.error('❌ Invalid admin FCM token format:', token.substring(0, 20) + '...');
      return false;
    }

    try {
      const userDocRef = doc(db, 'users', userId);
      
      await updateDoc(userDocRef, {
        fcm_token: token,
        fcm_token_updated: serverTimestamp(),
        fcm_token_platform: window.ReactNativeWebView ? 'mobile' : 'web',
        user_type: userType,
        is_admin: true,
        last_active: serverTimestamp()
      });

      console.log('✅ Admin FCM token stored successfully for user:', userId);
      return true;
    } catch (error) {
      console.error('❌ Error storing admin FCM token:', error);
      
      // If document doesn't exist, create it
      try {
        const userDocRef = doc(db, 'users', userId);
        await setDoc(userDocRef, {
          fcm_token: token,
          fcm_token_updated: serverTimestamp(),
          fcm_token_platform: window.ReactNativeWebView ? 'mobile' : 'web',
          user_type: userType,
          is_admin: true,
          has_admin: true,
          last_active: serverTimestamp()
        }, { merge: true });

        console.log('✅ Admin FCM token document created for user:', userId);
        return true;
      } catch (createError) {
        console.error('❌ Error creating admin FCM token document:', createError);
        return false;
      }
    }
  }

  // Remove admin FCM token when user logs out
  async removeFCMToken(userId) {
    if (!userId) return false;

    try {
      const userDocRef = doc(db, 'users', userId);
      
      await updateDoc(userDocRef, {
        fcm_token: null,
        fcm_token_updated: serverTimestamp(),
        fcm_token_platform: null
      });

      console.log('🗑️ Admin FCM token removed for user:', userId);
      this.currentToken = null;
      return true;
    } catch (error) {
      console.error('❌ Error removing admin FCM token:', error);
      return false;
    }
  }

  // Handle foreground messages (when admin app is active)
  onMessage(callback) {
    if (this.messaging) {
      return onMessage(this.messaging, callback);
    }
    return null;
  }

  // Auto-register admin FCM token
  async autoRegisterToken(userId, userType = 'admin') {
    try {
      const token = await this.getToken();
      if (token) {
        await this.storeFCMToken(userId, token, userType);
        return token;
      }
      return null;
    } catch (error) {
      console.error('❌ Error auto-registering admin FCM token:', error);
      return null;
    }
  }

  // Initialize messaging for Admin WebView communication
  setupWebViewCommunication() {
    if (window.ReactNativeWebView) {
      // Global function for admin mobile app to call
      window.requestAdminFCMToken = () => {
        console.log('📱 Admin FCM token requested by mobile app');
        this.getToken();
      };

      // Listen for messages from Admin WebView
      window.addEventListener('message', (event) => {
        try {
          const message = JSON.parse(event.data);
          
          if (message.type === 'ADMIN_FCM_TOKEN' && message.token) {
            console.log('📱 Admin FCM token received from WebView:', message.token.substring(0, 20) + '...');
            this.currentToken = message.token;
            
            // Trigger custom event for admin components to listen
            window.dispatchEvent(new CustomEvent('adminFcmTokenReceived', {
              detail: { token: message.token }
            }));
          }
        } catch (error) {
          console.error('Error handling Admin WebView message:', error);
        }
      });

      console.log('📱 Admin WebView FCM communication setup complete');
      
      // Mark environment as admin mobile app
      window.isAdminMobileApp = true;
    }
  }

  // Get current stored admin token
  getCurrentToken() {
    return this.currentToken;
  }

  // Check if running in admin mobile app
  isMobileApp() {
    return !!window.ReactNativeWebView && !!window.isAdminMobileApp;
  }

  // Send notification to customer (admin action)
  sendCustomerNotification(customerData, notificationData) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'SEND_CUSTOMER_NOTIFICATION',
        customerData,
        notificationData
      }));
    }
  }

  // Show local admin notification
  showAdminNotification(title, body, data = {}) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'SHOW_ADMIN_NOTIFICATION',
        title,
        body,
        data
      }));
    }
  }

  // Confirm order status update
  orderStatusUpdated(orderNumber, status) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'ORDER_STATUS_UPDATED',
        orderNumber,
        status
      }));
    }
  }
}

// Create singleton instance for admin
const adminFCMService = new AdminFCMService();

// Setup Admin WebView communication on load
if (typeof window !== 'undefined') {
  adminFCMService.setupWebViewCommunication();
}

export default adminFCMService;