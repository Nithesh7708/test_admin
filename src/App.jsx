import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminAuthProvider } from './context/AdminAuthContext'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminOrders from './pages/AdminOrders'
import AdminCustomers from './pages/AdminCustomers'
import DatabaseSetup from './pages/DatabaseSetup'
import AdminNavbar from './components/AdminNavbar'
import AdminSidebar from './components/AdminSidebar'
import { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/setup" element={<DatabaseSetup />} />
          <Route path="/*" element={
            <AdminProtectedRoute>
              <div className="flex h-screen overflow-hidden">
                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                  <div 
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                  ></div>
                )}
                
                {/* Sidebar */}
                <AdminSidebar 
                  sidebarOpen={sidebarOpen} 
                  setSidebarOpen={setSidebarOpen} 
                />
                
                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <AdminNavbar 
                    setSidebarOpen={setSidebarOpen} 
                  />
                  <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
                    <Routes>
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route path="/dashboard" element={<AdminDashboard />} />
                      <Route path="/orders" element={<AdminOrders />} />
                      <Route path="/customers" element={<AdminCustomers />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </AdminProtectedRoute>
          } />
        </Routes>
      </div>
    </AdminAuthProvider>
  )
}

export default App