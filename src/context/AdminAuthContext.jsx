import { createContext, useContext, useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { auth, db } from '../config/firebase'
import adminFCMService from '../services/fcmService'

const AdminAuthContext = createContext()

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdminUser, setIsAdminUser] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [isSuperAdmin, setIsSuperAdmin] = useState(false)

  // Check user roles using has_admin field
  const checkUserRole = async (firebaseUser) => {
    try {
      console.log('🔍 Checking user role for:', firebaseUser.email)
      
      // Check user document by UID first
      let userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
      
      if (!userDoc.exists()) {
        console.log('📄 User document not found by UID, checking by email')
        
        // Check by email in users collection
        const userQuery = query(
          collection(db, 'users'),
          where('email', '==', firebaseUser.email)
        )
        const userSnapshot = await getDocs(userQuery)
        
        if (!userSnapshot.empty) {
          userDoc = userSnapshot.docs[0]
        } else {
          // Create admin user if it's admin@gmail.com
          if (firebaseUser.email === 'admin@gmail.com') {
            console.log('🔄 Creating admin user document...')
            const { createUserDocument } = await import('../utils/userDataStructure')
            const adminUserData = createUserDocument(firebaseUser, {
              name: 'Admin',
              has_admin: true,
              role: 'admin'
            })
            
            const { setDoc } = await import('firebase/firestore')
            await setDoc(doc(db, 'users', firebaseUser.uid), adminUserData)
            
            console.log('✅ Admin user document created')
            return {
              hasAccess: true,
              role: 'admin',
              isSuperAdmin: false,
              permissions: ['dashboard', 'orders', 'customers']
            }
          }
          
          console.log('❌ User document not found')
          return { hasAccess: false, role: null, isSuperAdmin: false, permissions: [] }
        }
      }
      
      const userData = userDoc.data()
      console.log('📋 User data:', userData)
      
      // Check has_admin field primarily
      const hasAdminAccess = userData.has_admin === true
      
      // Legacy support for old admin field
      const hasLegacyAdmin = userData.admin === true
      
      if (hasAdminAccess || hasLegacyAdmin) {
        console.log('✅ Admin access granted via has_admin field')
        
        // Determine role level
        const userRole = userData.role || 'admin'
        const isSuperAdmin = userRole === 'super_admin'
        
        return {
          hasAccess: true,
          role: userRole,
          isSuperAdmin,
          permissions: isSuperAdmin ? ['all'] : ['dashboard', 'orders', 'customers']
        }
      }
      
      console.log('❌ User does not have admin access - has_admin:', userData.has_admin)
      return { hasAccess: false, role: null, isSuperAdmin: false, permissions: [] }
      
    } catch (error) {
      console.error('❌ Error checking user role:', error)
      
      // No fallback access - all admin access must be properly configured in database
      console.log('❌ Admin access denied - user must have has_admin: true in Firestore')
      
      return { hasAccess: false, role: null, isSuperAdmin: false, permissions: [] }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log('🔐 User authenticated:', firebaseUser.email)
        
        // Check user role in Firestore
        const roleResult = await checkUserRole(firebaseUser)
        
        if (roleResult.hasAccess) {
          setUser(firebaseUser)
          setIsAdminUser(true)
          setUserRole(roleResult.role)
          setIsSuperAdmin(roleResult.isSuperAdmin)
          
          // Auto-register admin FCM token for existing sessions
          try {
            console.log('👤 Admin session detected, ensuring FCM token is registered...');
            await adminFCMService.autoRegisterToken(firebaseUser.uid, 'admin');
          } catch (fcmError) {
            console.warn('⚠️ Failed to register admin FCM token for existing session:', fcmError);
          }
          
          console.log('✅ Access granted - Role:', roleResult.role)
        } else {
          console.log('❌ Access denied')
          setUser(null)
          setIsAdminUser(false)
          setUserRole(null)
          setIsSuperAdmin(false)
          await signOut(auth)
        }
      } else {
        setUser(null)
        setIsAdminUser(false)
        setUserRole(null)
        setIsSuperAdmin(false)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email, password) => {
    try {
      console.log('🔑 Attempting login for:', email)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      // Check user role
      const roleResult = await checkUserRole(userCredential.user)
      
      if (!roleResult.hasAccess) {
        await signOut(auth)
        throw new Error('Access denied. Admin privileges required.')
      }

      setUserRole(roleResult.role)
      setIsSuperAdmin(roleResult.isSuperAdmin)
      
      // Auto-register admin FCM token after successful login
      try {
        console.log('🔐 Admin logged in, registering FCM token...');
        await adminFCMService.autoRegisterToken(userCredential.user.uid, 'admin');
      } catch (fcmError) {
        console.warn('⚠️ Failed to register admin FCM token on login:', fcmError);
      }
      
      console.log('✅ Login successful - Role:', roleResult.role)
      return userCredential
    } catch (error) {
      console.error('❌ Login error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      // Remove admin FCM token before logout
      if (user) {
        try {
          console.log('🚪 Admin logging out, removing FCM token...');
          await adminFCMService.removeFCMToken(user.uid);
        } catch (fcmError) {
          console.warn('⚠️ Failed to remove admin FCM token on logout:', fcmError);
        }
      }
      
      await signOut(auth)
      console.log('👋 Admin logged out')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const value = {
    user,
    isAdminUser,
    userRole,
    isSuperAdmin,
    loading,
    login,
    logout
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}