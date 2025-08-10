import { 
  collection, 
  getDocs, 
  doc, 
  getDoc,
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot,
  serverTimestamp 
} from 'firebase/firestore'
import { db } from '../config/firebase'
import adminNotificationService from './adminNotificationService'

const COLLECTIONS = {
  ORDERS: 'orders',
  USERS: 'users'
}

export const adminOrderService = {
  // Get all orders with real-time updates
  subscribeToOrders: (callback, filters = {}) => {
    try {
      let q = collection(db, COLLECTIONS.ORDERS)
      
      // Apply filters
      if (filters.status && filters.status !== 'all') {
        q = query(q, where('status', '==', filters.status))
      }
      
      if (filters.limit) {
        q = query(q, limit(filters.limit))
      }
      
      // Always order by creation date (newest first)
      q = query(q, orderBy('createdAt', 'desc'))
      
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const orders = []
        querySnapshot.forEach((doc) => {
          orders.push({ 
            id: doc.id, 
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt)
          })
        })
        callback(orders)
      })
      
      return unsubscribe
    } catch (error) {
      console.error('❌ Error subscribing to orders:', error)
      throw new Error('Failed to subscribe to orders')
    }
  },

  // Get all orders (one-time fetch)
  getAllOrders: async (filters = {}) => {
    try {
      let q = collection(db, COLLECTIONS.ORDERS)
      
      // Apply filters
      if (filters.status && filters.status !== 'all') {
        q = query(q, where('status', '==', filters.status))
      }
      
      if (filters.limit) {
        q = query(q, limit(filters.limit))
      }
      
      // Always order by creation date (newest first)
      q = query(q, orderBy('createdAt', 'desc'))
      
      const querySnapshot = await getDocs(q)
      const orders = []
      
      querySnapshot.forEach((doc) => {
        orders.push({ 
          id: doc.id, 
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt)
        })
      })
      
      return orders
    } catch (error) {
      console.error('❌ Error fetching orders:', error)
      throw new Error('Failed to fetch orders')
    }
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    try {
      // Get order data before updating to send notification
      const orderRef = doc(db, COLLECTIONS.ORDERS, orderId)
      const orderSnapshot = await getDoc(orderRef)
      
      if (!orderSnapshot.exists()) {
        throw new Error('Order not found')
      }
      
      const orderData = orderSnapshot.data()
      
      // Update order status
      await updateDoc(orderRef, {
        status,
        updatedAt: serverTimestamp(),
        ...(status === 'pickup' && { pickupTime: serverTimestamp() }),
        ...(status === 'completed' && { completedTime: serverTimestamp() })
      })
      
      console.log('✅ Order status updated:', orderId, status)
      
      // Send notification to customer
      try {
        const notificationResult = await adminNotificationService.sendOrderStatusUpdateToCustomer(
          { ...orderData, orderId },
          status
        )
        console.log('📱 Customer notification result:', notificationResult)
      } catch (notificationError) {
        console.warn('⚠️ Failed to send customer notification:', notificationError.message)
        // Don't fail the status update if notification fails
      }
      
      return true
    } catch (error) {
      console.error('❌ Error updating order status:', error)
      throw new Error('Failed to update order status')
    }
  },

  // Get pending orders count (for notifications)
  getPendingOrdersCount: async () => {
    try {
      const q = query(
        collection(db, COLLECTIONS.ORDERS),
        where('status', '==', 'pending')
      )
      
      const querySnapshot = await getDocs(q)
      return querySnapshot.size
    } catch (error) {
      console.error('❌ Error getting pending orders count:', error)
      return 0
    }
  },

  // Subscribe to new orders for real-time notifications
  subscribeToNewOrders: (callback) => {
    try {
      // Listen for orders created in the last 5 minutes
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000)
      
      const q = query(
        collection(db, COLLECTIONS.ORDERS),
        where('status', '==', 'pending'),
        orderBy('createdAt', 'desc')
      )
      
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newOrders = []
        querySnapshot.forEach((doc) => {
          const orderData = doc.data()
          const orderTime = orderData.createdAt?.toDate?.() || new Date(orderData.createdAt)
          
          // Only include orders from the last few minutes
          if (orderTime > fiveMinutesAgo) {
            newOrders.push({ 
              id: doc.id, 
              ...orderData,
              createdAt: orderTime
            })
          }
        })
        
        if (newOrders.length > 0) {
          callback(newOrders)
        }
      })
      
      return unsubscribe
    } catch (error) {
      console.error('❌ Error subscribing to new orders:', error)
      throw new Error('Failed to subscribe to new orders')
    }
  },

  // Get order statistics
  getOrderStats: async () => {
    try {
      const ordersRef = collection(db, COLLECTIONS.ORDERS)
      
      // Get all orders
      const allOrdersSnapshot = await getDocs(ordersRef)
      
      const stats = {
        total: allOrdersSnapshot.size,
        pending: 0,
        pickup: 0,
        completed: 0,
        totalRevenue: 0,
        todayOrders: 0,
        todayRevenue: 0
      }
      
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      allOrdersSnapshot.forEach((doc) => {
        const order = doc.data()
        const orderDate = order.createdAt?.toDate?.() || new Date(order.createdAt)
        
        // Count by status
        if (order.status === 'pending') stats.pending++
        else if (order.status === 'pickup') stats.pickup++
        else if (order.status === 'completed') stats.completed++
        
        // Calculate revenue
        const orderTotal = order.total || 0
        stats.totalRevenue += orderTotal
        
        // Today's stats
        if (orderDate >= today) {
          stats.todayOrders++
          stats.todayRevenue += orderTotal
        }
      })
      
      return stats
    } catch (error) {
      console.error('❌ Error getting order stats:', error)
      throw new Error('Failed to get order statistics')
    }
  }
}

export default adminOrderService