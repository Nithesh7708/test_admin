// Admin Notification Service for sending notifications to customers
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import adminFCMService from './fcmService';

class AdminNotificationService {
  constructor() {
    console.log('🔔 Admin Notification Service initialized');
  }

  // Get customer FCM token by order data
  async getCustomerFCMTokenFromOrder(orderData) {
    try {
      // Try to get customer by userId first
      if (orderData.userId) {
        const userDoc = await getDoc(doc(db, 'users', orderData.userId));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.fcm_token) {
            return {
              token: userData.fcm_token,
              userId: userDoc.id,
              email: userData.email,
              name: userData.displayName || userData.name,
              platform: userData.fcm_token_platform
            };
          }
        }
      }

      // Fallback: try to find by email
      if (orderData.email || orderData.deliveryInfo?.email) {
        const email = orderData.email || orderData.deliveryInfo.email;
        const customerQuery = query(
          collection(db, 'users'),
          where('email', '==', email),
          where('fcm_token', '!=', null)
        );
        
        const customerSnapshot = await getDocs(customerQuery);
        
        if (!customerSnapshot.empty) {
          const customerData = customerSnapshot.docs[0].data();
          return {
            token: customerData.fcm_token,
            userId: customerSnapshot.docs[0].id,
            email: customerData.email,
            name: customerData.displayName || customerData.name,
            platform: customerData.fcm_token_platform
          };
        }
      }
      
      console.log('⚠️ No FCM token found for customer in order:', orderData.orderId);
      return null;
    } catch (error) {
      console.error('❌ Error getting customer FCM token from order:', error);
      return null;
    }
  }

  // Send order status update to customer
  async sendOrderStatusUpdateToCustomer(orderData, newStatus) {
    try {
      console.log('📱 Admin sending status update to customer...');
      
      const customerToken = await this.getCustomerFCMTokenFromOrder(orderData);
      
      if (!customerToken) {
        console.log('⚠️ No customer FCM token found for order:', orderData.orderId);
        return { 
          success: false, 
          message: 'Customer FCM token not found',
          customerNotified: false
        };
      }

      const statusMessages = {
        pending: {
          title: '📋 Order Received',
          body: `Your order #${orderData.orderId} has been received and is being processed.`,
          color: '#FF9800'
        },
        processing: {
          title: '👨‍🍳 Order in Progress',
          body: `Great news! Your order #${orderData.orderId} is now being prepared by our bakers.`,
          color: '#2196F3'
        },
        ready: {
          title: '🎉 Your Order is Ready!',
          body: `Amazing! Order #${orderData.orderId} is ready for pickup at Arunachalam Bakery.`,
          color: '#4CAF50'
        },
        pickup: {
          title: '🎉 Your Order is Ready for Pickup!',
          body: `Great news! Order #${orderData.orderId} is ready for pickup at Arunachalam Bakery.`,
          color: '#4CAF50'
        },
        completed: {
          title: '✅ Order Completed',
          body: `Thank you! Order #${orderData.orderId} has been completed successfully. We hope you enjoyed it!`,
          color: '#4CAF50'
        },
        cancelled: {
          title: '❌ Order Cancelled',
          body: `We're sorry, but order #${orderData.orderId} has been cancelled. Please contact us for details.`,
          color: '#f44336'
        }
      };

      const statusConfig = statusMessages[newStatus] || statusMessages.pending;

      const notification = {
        title: statusConfig.title,
        body: statusConfig.body,
        data: {
          type: 'order_status_update',
          status: newStatus,
          orderId: orderData.orderId,
          orderNumber: orderData.orderId,
          total: orderData.total?.toString() || '0',
          customerName: customerToken.name,
          url: '/orders'
        }
      };

      console.log('📱 Sending status update notification:');
      console.log('📋 Order:', orderData.orderId, '→', newStatus);
      console.log('👤 Customer:', customerToken.name, customerToken.email);

      // If running in admin mobile app, use WebView communication
      if (window.ReactNativeWebView && window.isAdminMobileApp) {
        adminFCMService.orderStatusUpdated(orderData.orderId, newStatus);
        
        // Simulate sending to customer (in production, this would go through your backend)
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: 'SEND_CUSTOMER_STATUS_NOTIFICATION',
          customerToken: customerToken.token,
          notification: notification,
          status: newStatus
        }));
      }

      // Show confirmation to admin
      if (newStatus === 'pickup' || newStatus === 'ready') {
        if (window.ReactNativeWebView) {
          adminFCMService.showAdminNotification(
            '✅ Customer Notified',
            `Customer has been notified that Order #${orderData.orderId} is ready for pickup!`
          );
        }
      }

      return { 
        success: true, 
        message: `Status update sent to customer: ${customerToken.name}`,
        customerNotified: true,
        customerEmail: customerToken.email,
        status: newStatus
      };

    } catch (error) {
      console.error('❌ Error sending status update to customer:', error);
      return { 
        success: false, 
        error: error.message,
        customerNotified: false
      };
    }
  }

  // Special method for "Order Ready" notifications
  async sendOrderReadyNotification(orderData) {
    console.log('🎉 Sending "Order Ready" notification...');
    return await this.sendOrderStatusUpdateToCustomer(orderData, 'pickup');
  }

  // Send custom notification to customer
  async sendCustomNotificationToCustomer(orderData, title, message) {
    try {
      const customerToken = await this.getCustomerFCMTokenFromOrder(orderData);
      
      if (!customerToken) {
        return { 
          success: false, 
          message: 'Customer FCM token not found',
          customerNotified: false
        };
      }

      const notification = {
        title: title,
        body: message,
        data: {
          type: 'custom_notification',
          orderId: orderData.orderId,
          url: '/orders'
        }
      };

      console.log('📱 Sending custom notification to customer:', title);

      if (window.ReactNativeWebView && window.isAdminMobileApp) {
        adminFCMService.sendCustomerNotification(customerToken, notification);
      }

      return { 
        success: true, 
        message: `Custom notification sent to customer: ${customerToken.name}`,
        customerNotified: true
      };

    } catch (error) {
      console.error('❌ Error sending custom notification:', error);
      return { 
        success: false, 
        error: error.message,
        customerNotified: false
      };
    }
  }
}

// Create singleton instance
const adminNotificationService = new AdminNotificationService();

export default adminNotificationService;