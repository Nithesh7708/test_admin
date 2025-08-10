import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'

function AdminProtectedRoute({ children }) {
  const { user, isAdminUser, loading } = useAdminAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bakery-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!user || !isAdminUser) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default AdminProtectedRoute