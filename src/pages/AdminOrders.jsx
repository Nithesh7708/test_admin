import { useState, useEffect } from 'react'
import { 
  Package,
  Clock, 
  CheckCircle,
  Phone,
  MapPin,
  Eye,
  Filter,
  Search,
  RefreshCw,
  Calendar,
  Truck,
  X,
  Mail
} from 'lucide-react'
import { adminOrderService } from '../services/adminOrderService'

function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    dateRange: 'all'
  })
  const [statusUpdateLoading, setStatusUpdateLoading] = useState({})

  useEffect(() => {
    // Set up real-time subscription to orders
    const unsubscribe = adminOrderService.subscribeToOrders((ordersData) => {
      setOrders(ordersData)
      setLoading(false)
    })

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

  // Apply filters whenever orders or filters change
  useEffect(() => {
    let filtered = [...orders]

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(order => order.status === filters.status)
    }

    // Search filter
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(searchTerm) ||
        order.deliveryInfo?.name?.toLowerCase().includes(searchTerm) ||
        order.deliveryInfo?.phone?.includes(searchTerm) ||
        order.items?.some(item => item.name.toLowerCase().includes(searchTerm))
      )
    }

    // Date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date()
      let startDate = new Date()

      switch (filters.dateRange) {
        case 'today':
          startDate.setHours(0, 0, 0, 0)
          break
        case 'week':
          startDate.setDate(now.getDate() - 7)
          break
        case 'month':
          startDate.setMonth(now.getMonth() - 1)
          break
      }

      filtered = filtered.filter(order => {
        const orderDate = new Date(order.createdAt)
        return orderDate >= startDate
      })
    }

    setFilteredOrders(filtered)
  }, [orders, filters])

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      setStatusUpdateLoading(prev => ({ ...prev, [orderId]: true }))
      await adminOrderService.updateOrderStatus(orderId, newStatus)
      
      // Show success feedback
      const orderIndex = orders.findIndex(o => o.id === orderId)
      if (orderIndex !== -1) {
        const updatedOrders = [...orders]
        updatedOrders[orderIndex] = { ...updatedOrders[orderIndex], status: newStatus }
        setOrders(updatedOrders)
      }
    } catch (error) {
      console.error('Error updating order status:', error)
      setError('Failed to update order status')
    } finally {
      setStatusUpdateLoading(prev => ({ ...prev, [orderId]: false }))
    }
  }

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
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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

    const icons = {
      pending: Clock,
      pickup: Truck,
      completed: CheckCircle
    }

    const Icon = icons[status] || Clock

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badges[status] || badges.pending}`}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[status] || status}
      </span>
    )
  }

  const getNextAction = (currentStatus) => {
    switch (currentStatus) {
      case 'pending':
        return { action: 'pickup', label: 'Mark as Pickup', color: 'bg-blue-500 hover:bg-blue-600' }
      case 'pickup':
        return { action: 'completed', label: 'Mark as Completed', color: 'bg-green-500 hover:bg-green-600' }
      default:
        return null
    }
  }

  const showOrderDetails = (order) => {
    setSelectedOrder(order)
    setShowOrderModal(true)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-bakery-500"></div>
        <span className="ml-2 text-gray-600">Loading orders...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Manage all customer orders and track status</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bakery-100 text-bakery-800">
            {filteredOrders.length} orders
          </span>
        </div>
      </div>

      {/* Filters - Mobile Friendly */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search orders..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Status and Date Filters */}
          <div className="grid grid-cols-2 gap-3">
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="pickup">Ready</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={filters.dateRange}
              onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List - Mobile Friendly */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No orders found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredOrders.map((order) => {
                const nextAction = getNextAction(order.status)
                return (
                  <div key={order.id} className="bg-gray-50 rounded-lg p-3">
                    {/* Order Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          #{order.id.slice(-6)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(order.status)}
                        <button
                          onClick={() => showOrderDetails(order)}
                          className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                        >
                          <Eye className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {order.deliveryInfo?.name || 'N/A'}
                      </p>
                      <div className="flex items-center text-xs text-gray-600 mb-1">
                        <Phone className="h-3 w-3 mr-2" />
                        {order.deliveryInfo?.phone || 'N/A'}
                      </div>
                      {order.deliveryInfo?.address && (
                        <div className="flex items-start text-xs text-gray-600">
                          <MapPin className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{order.deliveryInfo.address}</span>
                        </div>
                      )}
                    </div>

                    {/* Order Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                      <div>
                        <p className="text-gray-500 mb-1">Total Amount</p>
                        <p className="font-bold text-green-600">{formatCurrency(order.total || 0)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Items</p>
                        <p className="font-medium">{order.items?.length || 0} items</p>
                      </div>
                    </div>

                    {/* Special Items */}
                    {order.items?.some(item => item.category === 'Cakes' || item.name?.toLowerCase().includes('cake')) && (
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                          🎂 Custom Cake Order
                        </span>
                      </div>
                    )}

                    {/* Actions */}
                    {nextAction && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleStatusUpdate(order.id, nextAction.action)}
                          disabled={statusUpdateLoading[order.id]}
                          className={`inline-flex items-center px-3 py-1.5 text-xs font-medium text-white rounded transition-colors disabled:opacity-50 ${nextAction.color}`}
                        >
                          {statusUpdateLoading[order.id] ? (
                            <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                          ) : (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          )}
                          {nextAction.label}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal - Mobile First Design */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-xl sm:max-w-2xl overflow-y-auto">
            {/* Header - Sticky on mobile */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Order #{selectedOrder.id.slice(-6)}
                </h2>
                <p className="text-xs text-gray-500">{formatDate(selectedOrder.createdAt)}</p>
              </div>
              <button
                onClick={() => setShowOrderModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Customer Info Card */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">
                      {selectedOrder.deliveryInfo?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {selectedOrder.deliveryInfo?.name || 'Unknown Customer'}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(selectedOrder.status)}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">{selectedOrder.deliveryInfo?.phone || 'N/A'}</span>
                  </div>
                  {selectedOrder.deliveryInfo?.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">{selectedOrder.deliveryInfo.email}</span>
                    </div>
                  )}
                  {selectedOrder.deliveryInfo?.address && (
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">{selectedOrder.deliveryInfo.address}</p>
                        {selectedOrder.deliveryInfo?.city && (
                          <p className="text-xs text-gray-500">
                            {selectedOrder.deliveryInfo.city} - {selectedOrder.deliveryInfo?.pincode}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {selectedOrder.deliveryInfo?.notes && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
                      <p className="text-xs font-medium text-yellow-800 mb-1">Special Instructions:</p>
                      <p className="text-sm text-yellow-700">{selectedOrder.deliveryInfo.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Items - Mobile Friendly */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-gray-600" />
                  Order Items ({selectedOrder.items?.length || 0})
                </h3>
                
                <div className="space-y-3">
                  {selectedOrder.items?.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            {item.quantity} × {item.unit} @ {formatCurrency(item.price * item.unitMultiplier)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            {formatCurrency(item.price * item.unitMultiplier * item.quantity)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Custom Cake Details */}
                      {item.customization && (
                        <div className="bg-pink-50 border border-pink-200 rounded p-2 mt-2">
                          <div className="flex items-center mb-1">
                            <span className="text-pink-600 mr-1">🎂</span>
                            <span className="text-xs font-medium text-pink-800">Custom Cake Details</span>
                          </div>
                          <div className="space-y-1 text-xs text-pink-700">
                            {item.customization.purpose && (
                              <p><span className="font-medium">Purpose:</span> {item.customization.purpose}</p>
                            )}
                            {item.customization.customName && (
                              <p><span className="font-medium">Custom Name:</span> {item.customization.customName}</p>
                            )}
                            {item.customization.specialInstructions && (
                              <p><span className="font-medium">Instructions:</span> {item.customization.specialInstructions}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Payment Method:</span>
                  <span className="text-sm text-gray-900">Cash on Delivery</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-gray-900">Total Amount:</span>
                  <span className="font-bold text-green-600 text-xl">
                    {formatCurrency(selectedOrder.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Actions - Sticky on mobile */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                {getNextAction(selectedOrder.status) && (
                  <button
                    onClick={() => {
                      const nextAction = getNextAction(selectedOrder.status)
                      handleStatusUpdate(selectedOrder.id, nextAction.action)
                      setShowOrderModal(false)
                    }}
                    disabled={statusUpdateLoading[selectedOrder.id]}
                    className={`flex-1 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors disabled:opacity-50 ${getNextAction(selectedOrder.status).color}`}
                  >
                    {statusUpdateLoading[selectedOrder.id] ? (
                      <div className="flex items-center justify-center">
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Updating...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {getNextAction(selectedOrder.status).label}
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          {error}
          <button 
            onClick={() => setError('')}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminOrders