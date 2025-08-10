import { Bell, Menu, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useAdminAuth } from '../context/AdminAuthContext'

function AdminNavbar({ setSidebarOpen }) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, userRole, isSuperAdmin, logout } = useAdminAuth()
  const [notifications] = useState(0) // Will be connected to real notifications later

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bakery-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo/Title */}
          <div className="flex items-center ml-4 lg:ml-0">
            <div className="h-8 w-8 bg-bakery-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">
              Admin Panel
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bakery-500 focus:ring-offset-2 rounded-full">
            <Bell className="h-6 w-6" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center notification-badge">
                {notifications}
              </span>
            )}
          </button>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center p-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-bakery-500 focus:ring-offset-2"
            >
              <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-2 hidden sm:block">
                <span className="text-gray-700 text-sm">
                  {user?.email?.split('@')[0] || 'Admin'}
                </span>
                {userRole && (
                  <span className={`block text-xs ${isSuperAdmin ? 'text-purple-600 font-semibold' : 'text-gray-500'}`}>
                    {isSuperAdmin ? '👑 Super Admin' : userRole.replace('_', ' ').toUpperCase()}
                  </span>
                )}
              </div>
            </button>

            {/* Dropdown menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm text-gray-900 font-medium">Signed in as</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  {userRole && (
                    <p className={`text-xs mt-1 ${isSuperAdmin ? 'text-purple-600 font-semibold' : 'text-gray-600'}`}>
                      Role: {isSuperAdmin ? '👑 Super Admin' : userRole.replace('_', ' ').toUpperCase()}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar