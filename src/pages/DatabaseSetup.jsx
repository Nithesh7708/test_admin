import { useState } from 'react'
import { setupDatabase, setupAdminUser, fixExistingAdminUser } from '../utils/setupAdminUser'

function DatabaseSetup() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [logs, setLogs] = useState([])
  const [adminPassword, setAdminPassword] = useState('')

  const addLog = (message) => {
    setLogs(prev => [...prev, { message, timestamp: new Date().toLocaleTimeString() }])
  }

  const handleSetupDatabase = async () => {
    setLoading(true)
    setResult(null)
    setLogs([])
    
    try {
      addLog('Starting database setup...')
      
      // Override console.log to capture logs
      const originalLog = console.log
      console.log = (message) => {
        addLog(message)
        originalLog(message)
      }
      
      const setupResult = await setupDatabase(adminPassword)
      
      // Restore console.log
      console.log = originalLog
      
      setResult(setupResult)
      
      if (setupResult.success) {
        addLog('✅ Database setup completed successfully!')
      } else {
        addLog(`❌ Setup failed: ${setupResult.error}`)
      }
      
    } catch (error) {
      addLog(`💥 Error: ${error.message}`)
      setResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleSetupAdminOnly = async () => {
    setLoading(true)
    setResult(null)
    setLogs([])
    
    try {
      addLog('Setting up admin user only...')
      
      // Override console.log to capture logs
      const originalLog = console.log
      console.log = (message) => {
        addLog(message)
        originalLog(message)
      }
      
      const adminUser = await setupAdminUser(adminPassword)
      
      // Restore console.log
      console.log = originalLog
      
      setResult({ success: true, adminUser, customers: [] })
      addLog('✅ Admin user setup completed!')
    } catch (error) {
      addLog(`❌ Error: ${error.message}`)
      setResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleFixExistingUser = async () => {
    setLoading(true)
    setResult(null)
    setLogs([])
    
    try {
      addLog('Fixing existing admin user...')
      
      // Override console.log to capture logs
      const originalLog = console.log
      console.log = (message) => {
        addLog(message)
        originalLog(message)
      }
      
      const fixResult = await fixExistingAdminUser()
      
      // Restore console.log
      console.log = originalLog
      
      setResult(fixResult)
      
      if (fixResult.success) {
        addLog('✅ Existing admin user fixed successfully!')
      } else {
        addLog(`❌ Fix failed: ${fixResult.error}`)
      }
      
    } catch (error) {
      addLog(`💥 Error: ${error.message}`)
      setResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Database Setup</h1>
          <p className="text-gray-600">Initialize your admin user and sample data</p>
        </div>

        {/* Password Input */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Admin Password (Optional)</h2>
          <p className="text-gray-600 mb-4 text-sm">
            If you want to create a new Firebase Auth user, provide a password. 
            If the user already exists in Firebase Auth, leave this empty.
          </p>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Enter admin password (min 6 characters)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fix Existing User</h2>
            <p className="text-gray-600 mb-4 text-sm">
              If you already have an admin@gmail.com user document but can't login, this will add the <code className="bg-gray-100 px-1 rounded">has_admin</code> field.
            </p>
            <button
              onClick={handleFixExistingUser}
              disabled={loading}
              className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Fixing...' : 'Fix Existing User'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Setup Admin User</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Creates an admin user with email: <code className="bg-gray-100 px-2 py-1 rounded">admin@gmail.com</code>
            </p>
            <button
              onClick={handleSetupAdminOnly}
              disabled={loading}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Setting up...' : 'Setup Admin User'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Full Setup</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Creates admin user and sample customer data for testing
            </p>
            <button
              onClick={handleSetupDatabase}
              disabled={loading}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Setting up...' : 'Full Setup'}
            </button>
          </div>
        </div>

        {/* Logs Section */}
        {logs.length > 0 && (
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <h3 className="text-white text-lg font-semibold mb-4">Setup Logs</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-gray-400 text-xs mt-0.5 font-mono">
                    {log.timestamp}
                  </span>
                  <span className="text-green-400 text-sm font-mono">
                    {log.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {result.success ? '✅ Setup Results' : '❌ Setup Failed'}
            </h3>
            
            {result.success ? (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Admin User Created</h4>
                  <div className="text-sm text-green-700">
                    <p><strong>Email:</strong> {result.adminUser?.email}</p>
                    <p><strong>Name:</strong> {result.adminUser?.name}</p>
                    <p><strong>Admin Access:</strong> {result.adminUser?.has_admin ? 'Yes' : 'No'}</p>
                  </div>
                </div>
                
                {result.customers?.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Sample Customers Created</h4>
                    <div className="text-sm text-blue-700">
                      <p><strong>Total Customers:</strong> {result.customers.length}</p>
                      <ul className="mt-2 space-y-1">
                        {result.customers.map((customer, index) => (
                          <li key={index}>• {customer.name} ({customer.email})</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Next Steps</h4>
                  <ol className="text-sm text-yellow-700 space-y-1">
                    <li>1. Go to <a href="/login" className="underline">Admin Login</a></li>
                    <li>2. Use email: <code className="bg-yellow-100 px-1 rounded">admin@gmail.com</code></li>
                    <li>3. Use your Firebase Authentication password</li>
                    <li>4. You should now have access to the admin panel</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700">
                  <strong>Error:</strong> {result.error}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Instructions</h3>
          <ol className="text-blue-800 space-y-2 list-decimal list-inside">
            <li>First, make sure you have Firebase Authentication set up</li>
            <li>Create a user with email <code className="bg-blue-100 px-1 rounded">admin@gmail.com</code> in Firebase Auth</li>
            <li>Click "Setup Admin User" or "Full Setup" above</li>
            <li>This will create the necessary user document in Firestore with <code className="bg-blue-100 px-1 rounded">has_admin: true</code></li>
            <li>You can then login to the admin panel with your credentials</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default DatabaseSetup