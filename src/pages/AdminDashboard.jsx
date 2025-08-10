import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Users,
  IndianRupee,
  Eye,
  Package
} from 'lucide-react'
import { adminOrderService } from '../services/adminOrderService'

function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    pickup: 0,
    completed: 0,
    totalRevenue: 0,
    todayOrders: 0,
    todayRevenue: 0
  })
  const [recentOrders, setRecentOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadDashboardData()
    
    // Set up real-time updates for recent orders
    const unsubscribe = adminOrderService.subscribeToOrders(
      (orders) => {
        setRecentOrders(orders.slice(0, 5)) // Show only 5 recent orders
      },
      { limit: 5 }
    )

    // Set up new order notifications
    const notificationUnsubscribe = adminOrderService.subscribeToNewOrders((newOrders) => {
      // Show notification for new orders
      if (newOrders.length > 0) {
        showNewOrderNotification(newOrders[0])
      }
    })

    return () => {
      unsubscribe?.()
      notificationUnsubscribe?.()
    }
  }, [])

  const loadDashboardData = async () => {
    try {
      setLoading(true)
      const orderStats = await adminOrderService.getOrderStats()
      setStats(orderStats)
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      setError('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const showNewOrderNotification = (order) => {
    // Simple notification - you can enhance this with a toast library
    if (Notification.permission === 'granted') {
      new Notification('New Order Received!', {
        body: `Order #${order.id.slice(-6)} - ₹${order.total}`,
        icon: '/vite.svg'
      })
    }
  }

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount)
  }

  const formatDate = (date) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      pickup: 'bg-blue-100 text-blue-800 border-blue-200',
      completed: 'bg-green-100 text-green-800 border-green-200'
    }
    
    const labels = {
      pending: 'Pending',
      pickup: 'Ready for Pickup',
      completed: 'Completed'
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badges[status] || badges.pending}`}>
        {labels[status] || status}
      </span>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-bakery-500"></div>
        <span className="ml-2 text-gray-600">Loading dashboard...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
        <button 
          onClick={loadDashboardData}
          className="mt-2 text-sm text-red-600 hover:text-red-500 font-medium"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">Admin Panel</p>
      </div>

      {/* Stats Cards - Mobile First Design */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="p-2 bg-blue-100 rounded-lg mb-2 mx-auto w-fit">
              <ShoppingBag className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-xs text-gray-600 mb-1">Total Orders</p>
            <p className="text-lg font-bold text-gray-900">{stats.total}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="p-2 bg-yellow-100 rounded-lg mb-2 mx-auto w-fit">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <p className="text-xs text-gray-600 mb-1">Pending</p>
            <p className="text-lg font-bold text-gray-900">{stats.pending}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="p-2 bg-green-100 rounded-lg mb-2 mx-auto w-fit">
              <IndianRupee className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-xs text-gray-600 mb-1">Revenue</p>
            <p className="text-sm font-bold text-gray-900">{formatCurrency(stats.totalRevenue)}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="p-2 bg-purple-100 rounded-lg mb-2 mx-auto w-fit">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-xs text-gray-600 mb-1">Today</p>
            <p className="text-lg font-bold text-gray-900">{stats.todayOrders}</p>
          </div>
        </div>
      </div>

      {/* Recent Orders - Mobile Friendly */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <a 
              href="/orders"
              className="text-sm text-blue-600 hover:text-blue-500 font-medium flex items-center"
            >
              <Eye className="h-4 w-4 mr-1" />
              View All
            </a>
          </div>
        </div>

        <div className="p-4">
          {recentOrders.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No orders found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      #{order.id.slice(-6)}
                    </span>
                    {getStatusBadge(order.status)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-gray-500">Customer</p>
                      <p className="font-medium text-gray-900">
                        {order.deliveryInfo?.name || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="font-medium text-gray-900">
                        {formatCurrency(order.total || 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Items</p>
                      <p className="text-gray-900">
                        {order.items?.length || 0} items
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-gray-900">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard