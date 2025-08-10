// User Data Structure Template
// This defines the proper structure for user documents in Firestore

export const createUserDocument = (firebaseUser, additionalData = {}) => {
  return {
    // Authentication Info
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified,
    
    // Profile Information
    profile: {
      name: additionalData.name || firebaseUser.displayName || '',
      displayName: firebaseUser.displayName || '',
      photoURL: firebaseUser.photoURL || '',
      phone: additionalData.phone || '',
      
      // Address Information
      address: {
        street: additionalData.address || '',
        city: additionalData.city || '',
        pincode: additionalData.pincode || '',
        state: 'Tamil Nadu', // Default for bakery location
        country: 'India'
      },
      
      // Preferences
      preferences: {
        notifications: true,
        marketing: false,
        language: 'en'
      }
    },
    
    // Role & Permissions
    roles: {
      admin: additionalData.admin || false,
      customer: true,
      staff: additionalData.staff || false
    },
    
    // Statistics & Activity
    stats: {
      totalOrders: 0,
      totalSpent: 0,
      favoriteProducts: [],
      lastOrderDate: null,
      averageOrderValue: 0
    },
    
    // Account Status
    status: {
      active: true,
      verified: firebaseUser.emailVerified,
      suspended: false,
      reason: ''
    },
    
    // Timestamps
    timestamps: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      lastProfileUpdate: null
    },
    
    // Internal Fields
    _metadata: {
      version: '1.0',
      source: 'admin_panel',
      migrated: false
    }
  }
}

// Helper function to create minimal user for quick operations
export const createMinimalUser = (uid, email, name = '') => {
  return {
    uid,
    email,
    profile: {
      name,
      displayName: name,
      phone: '',
      address: {
        street: '',
        city: '',
        pincode: '',
        state: 'Tamil Nadu',
        country: 'India'
      }
    },
    roles: {
      admin: false,
      customer: true,
      staff: false
    },
    status: {
      active: true,
      verified: false
    },
    timestamps: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }
}

// Admin user creation helper
export const createAdminUser = (firebaseUser, additionalData = {}) => {
  const userData = createUserDocument(firebaseUser, additionalData)
  userData.roles.admin = true
  userData.roles.staff = true
  return userData
}

// Update user profile helper
export const updateUserProfile = (existingUser, updates) => {
  return {
    ...existingUser,
    profile: {
      ...existingUser.profile,
      ...updates.profile,
      address: {
        ...existingUser.profile?.address,
        ...updates.profile?.address
      }
    },
    timestamps: {
      ...existingUser.timestamps,
      updatedAt: new Date().toISOString(),
      lastProfileUpdate: new Date().toISOString()
    }
  }
}

// Check if user is admin
export const isAdmin = (user) => {
  return user?.roles?.admin === true
}

// Check if user is staff
export const isStaff = (user) => {
  return user?.roles?.staff === true || user?.roles?.admin === true
}

// Get user display name
export const getUserDisplayName = (user) => {
  return user?.profile?.name || user?.profile?.displayName || user?.email?.split('@')[0] || 'User'
}

// Get user full address
export const getUserFullAddress = (user) => {
  const address = user?.profile?.address
  if (!address) return ''
  
  return [
    address.street,
    address.city,
    address.pincode,
    address.state
  ].filter(Boolean).join(', ')
}