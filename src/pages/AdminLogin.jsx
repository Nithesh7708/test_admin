import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Shield, AlertCircle, Lock, Mail, ChefHat } from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAdminAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 admin-container">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-br from-bakery-100/30 to-orange-100/30"></div>
      </div>
      
      <div className="relative max-w-md w-full space-y-6 sm:space-y-8 animate-fade-in">
        {/* Header with Enhanced Design */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-bakery-500 to-bakery-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-scale-in">
            <ChefHat className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-bakery-600 to-bakery-800 bg-clip-text text-transparent mb-2">
            Admin Portal
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            Arunachalam Bakery Shop
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Management Dashboard
          </p>
        </div>

        {/* Enhanced Login Form */}
        <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/50 admin-card animate-scale-in">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 flex items-start animate-shake">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Authentication Error</h4>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-bakery-600 transition-colors">
                  Administrator Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-bakery-500 transition-colors" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-bakery-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-500 text-base admin-input"
                    placeholder="admin@arunachalambakery.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-bakery-600 transition-colors">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-bakery-500 transition-colors" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bakery-500 focus:border-bakery-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-500 text-base admin-input"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-bakery-500 to-bakery-600 hover:from-bakery-600 hover:to-bakery-700 disabled:from-bakery-300 disabled:to-bakery-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Shield className="h-6 w-6 mr-3" />
                  <span>Access Admin Panel</span>
                </>
              )}
            </button>
          </form>

          {/* Enhanced Security Notice */}
          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl p-5">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">🔒 Secure Admin Access</h4>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    This is a restricted administrative portal. Only authorized bakery staff 
                    with valid credentials can access the management dashboard. All login 
                    attempts are monitored and logged for security purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200/50">
                <div className="text-green-600 text-xl mb-1">📊</div>
                <p className="text-xs text-green-800 font-medium">Analytics</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200/50">
                <div className="text-purple-600 text-xl mb-1">🛍️</div>
                <p className="text-xs text-purple-800 font-medium">Orders</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50">
                <div className="text-amber-600 text-xl mb-1">🔔</div>
                <p className="text-xs text-amber-800 font-medium">Live Updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
            <p className="text-sm text-gray-600 font-medium">
              © 2024 Arunachalam Bakery Shop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Admin Panel v1.0 | Secure & Responsive
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin