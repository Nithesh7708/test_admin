import { useState, useEffect } from 'react'
import { Users, Eye, Phone, Mail, X, MapPin } from 'lucide-react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

function AdminCustomers() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadCustomers()
  }, [])

  const loadCustomers = async () => {
    try {
      setLoading(true)
      console.log('Loading customers from database...')
      
      const customersRef = collection(db, 'users')
      const snapshot = await getDocs(customersRef)
      console.log('Total users found:', snapshot.size)
      
      const customersData = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        console.log('User data:', { id: doc.id, ...data })
        
        // Filter out admin users - only include customers
        if (!data.has_admin && !data.admin && data.email) {
          // Try to extract profile data from nested objects
          const profileData = data.profile || {}
          const personalData = data.personal || {}
          
          customersData.push({
            id: doc.id,
            // Map different possible field names with profile section priority
            email: data.email,
            name: profileData.name || profileData.displayName || profileData.firstName || 
                  personalData.name || personalData.displayName || personalData.firstName ||
                  data.name || data.displayName || data.firstName || 'Unknown User',
            displayName: profileData.displayName || profileData.name || profileData.firstName ||
                        personalData.displayName || personalData.name || personalData.firstName ||
                        data.displayName || data.name || data.firstName || 'Unknown User',
            phone: profileData.phone || profileData.phoneNumber || profileData.mobile ||
                   personalData.phone || personalData.phoneNumber || personalData.mobile ||
                   data.phone || data.phoneNumber || data.mobile || '',
            phoneNumber: profileData.phone || profileData.phoneNumber || profileData.mobile ||
                        personalData.phone || personalData.phoneNumber || personalData.mobile ||
                        data.phone || data.phoneNumber || data.mobile || '',
            address: (() => {
              const addr = profileData.address || profileData.deliveryAddress ||
                          personalData.address || personalData.deliveryAddress ||
                          data.address || data.deliveryAddress || '';
              
              // Handle address objects
              if (typeof addr === 'object' && addr !== null) {
                const parts = [];
                if (addr.street) parts.push(addr.street);
                if (addr.city) parts.push(addr.city);
                if (addr.state) parts.push(addr.state);
                if (addr.country) parts.push(addr.country);
                if (addr.pincode) parts.push(addr.pincode);
                return parts.join(', ') || '';
              }
              
              return addr || '';
            })(),
            createdAt: data.createdAt || data.joinDate || profileData.createdAt || new Date().toISOString(),
            totalOrders: data.totalOrders || 0,
            orderHistory: data.orderHistory || [],
            // Keep original data for reference
            originalData: data
          })
        }
      })
      
      console.log('Filtered customers (no admins):', customersData)
      setCustomers(customersData)
    } catch (error) {
      console.error('Error loading customers:', error)
    } finally {
      setLoading(false)
    }
  }


  const handleViewCustomer = (customer) => {
    console.log('Viewing customer:', customer)
    setSelectedCustomer(customer)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCustomer(null)
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A'
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    } catch {
      return 'N/A'
    }
  }

  const formatCurrency = (amount) => {
    if (!amount) return '₹0'
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount)
  }

  const formatAddress = (address) => {
    if (!address) return '';
    
    // If it's already a string, return it
    if (typeof address === 'string') return address;
    
    // If it's an object, format it
    if (typeof address === 'object' && address !== null) {
      const parts = [];
      if (address.street) parts.push(address.street);
      if (address.city) parts.push(address.city);
      if (address.state) parts.push(address.state);
      if (address.country) parts.push(address.country);
      if (address.pincode) parts.push(address.pincode);
      return parts.join(', ') || '';
    }
    
    return '';
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading customers...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600">Manage customer information and view order history</p>
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <span className="text-blue-700 font-semibold">{customers.length} Customers</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Customer List</h2>
          </div>
        </div>

        <div className="p-4">
          {customers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No customers found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {customers.map((customer) => (
                <div key={customer.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium text-sm">
                          {customer.displayName?.charAt(0)?.toUpperCase() || customer.email?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {customer.displayName || customer.name || 'Unknown User'}
                        </p>
                        <p className="text-xs text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleViewCustomer(customer)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700"
                    >
                      View
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-900">{customer.phone || customer.phoneNumber || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Orders</p>
                      <p className="text-gray-900">{customer.totalOrders || 0}</p>
                    </div>
                  </div>
                  
                  {formatAddress(customer.address) && (
                    <div className="mt-2">
                      <p className="text-gray-500 mb-1 text-xs">Address</p>
                      <p className="text-gray-900 text-xs">{formatAddress(customer.address)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Customer Details Modal */}
      {showModal && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-xl sm:rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Customer Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4">
              {/* Customer Header */}
              <div className="text-center mb-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-2xl">
                    {selectedCustomer.name?.charAt(0)?.toUpperCase() || selectedCustomer.email?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {selectedCustomer.name || selectedCustomer.displayName || 'Unknown User'}
                </h4>
                <p className="text-sm text-gray-500">Customer since {formatDate(selectedCustomer.createdAt)}</p>
              </div>
              
              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-4 text-center">Contact Information</h5>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-600 mb-1">Email Address</p>
                      <p className="text-sm text-gray-900 break-words leading-relaxed">{selectedCustomer.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-600 mb-1">Phone Number</p>
                      <p className="text-sm text-gray-900 leading-relaxed">{selectedCustomer.phone || selectedCustomer.phoneNumber || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  {formatAddress(selectedCustomer.address) && (
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-500 mb-1">Address</p>
                        <p className="text-sm text-gray-900 break-words leading-relaxed">{formatAddress(selectedCustomer.address)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminCustomers