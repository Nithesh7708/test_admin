import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

// Function to find or create Firebase Auth user
const findOrCreateFirebaseUser = async (email, password = 'admin123456') => {
  try {
    // Try to sign in first to check if user exists
    console.log('🔍 Checking if Firebase Auth user exists...')
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('✅ Firebase Auth user found:', userCredential.user.uid)
      return userCredential.user
    } catch (signInError) {
      if (signInError.code === 'auth/user-not-found') {
        console.log('📝 Firebase Auth user not found, creating new user...')
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log('✅ Firebase Auth user created:', userCredential.user.uid)
        return userCredential.user
      } else if (signInError.code === 'auth/wrong-password') {
        console.log('⚠️ User exists but password is different. Please use correct password or reset it.')
        throw new Error('User exists but password is incorrect. Please use the correct password or reset it in Firebase Console.')
      } else {
        throw signInError
      }
    }
  } catch (error) {
    console.error('❌ Error with Firebase Auth:', error)
    throw error
  }
}

// Function to create admin user in database
export const setupAdminUser = async (adminPassword) => {
  try {
    console.log('🔧 Setting up admin user...')
    
    const adminEmail = 'admin@gmail.com'
    
    // First, check if admin user exists in Firestore by email
    console.log('🔍 Searching for existing admin user in Firestore...')
    const usersQuery = query(collection(db, 'users'), where('email', '==', adminEmail))
    const existingUsers = await getDocs(usersQuery)
    
    if (!existingUsers.empty) {
      console.log('ℹ️ Admin user document found in Firestore')
      const existingDoc = existingUsers.docs[0]
      const userData = existingDoc.data()
      console.log('📋 Existing user data:', userData)
      
      // Update has_admin field if it doesn't exist or is false
      if (userData.has_admin !== true) {
        console.log('🔄 Updating user document with has_admin: true')
        await setDoc(doc(db, 'users', existingDoc.id), {
          ...userData,
          has_admin: true,
          role: 'admin',
          updatedAt: new Date().toISOString()
        })
        console.log('✅ Updated admin user with has_admin field')
      }
      
      return { ...userData, docId: existingDoc.id }
    }
    
    // If no Firestore document exists, find or create Firebase Auth user
    let firebaseUser
    if (adminPassword) {
      firebaseUser = await findOrCreateFirebaseUser(adminEmail, adminPassword)
    } else {
      // Just try to find existing user without creating
      console.log('🔍 Checking for existing Firebase Auth user...')
      try {
        const tempCredential = await signInWithEmailAndPassword(auth, adminEmail, 'temp')
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          console.log('✅ Firebase Auth user exists (password check failed, but user exists)')
          // We can't get the UID without the correct password
          throw new Error('Firebase Auth user exists but we need the correct password. Please provide the admin password.')
        } else if (error.code === 'auth/user-not-found') {
          throw new Error('No Firebase Auth user found. Please create admin@gmail.com user in Firebase Console first, or provide a password to create it.')
        }
        throw error
      }
    }
    
    // Create Firestore document with Firebase Auth UID
    const adminUserData = {
      uid: firebaseUser.uid,
      email: adminEmail,
      displayName: 'Admin User',
      name: 'Admin',
      has_admin: true,
      role: 'admin',
      phoneNumber: '+91 9876543210',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      active: true,
      description: 'System administrator with full access'
    }
    
    // Use the Firebase Auth UID as the document ID
    await setDoc(doc(db, 'users', firebaseUser.uid), adminUserData)
    console.log('✅ Admin user document created in Firestore with UID:', firebaseUser.uid)
    console.log('📋 Admin user data:', adminUserData)
    
    return { ...adminUserData, docId: firebaseUser.uid }
    
  } catch (error) {
    console.error('❌ Error setting up admin user:', error)
    throw error
  }
}

// Function to create sample customer data

// Main setup function
export const setupDatabase = async (adminPassword) => {
  try {
    console.log('🚀 Starting database setup...')
    
    // Setup admin user
    const adminUser = await setupAdminUser(adminPassword)
    
    console.log('🎉 Database setup completed successfully!')
    console.log('📊 Summary:')
    console.log(`   - Admin users: 1`)
    console.log(`   - Ready for real customer registrations`)
    
    return {
      success: true,
      adminUser
    }
    
  } catch (error) {
    console.error('💥 Database setup failed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Quick fix function for existing users
export const fixExistingAdminUser = async () => {
  try {
    console.log('🔧 Fixing existing admin user...')
    
    // Find admin user by email
    const usersQuery = query(collection(db, 'users'), where('email', '==', 'admin@gmail.com'))
    const existingUsers = await getDocs(usersQuery)
    
    if (existingUsers.empty) {
      throw new Error('No admin user found with email admin@gmail.com')
    }
    
    const existingDoc = existingUsers.docs[0]
    const userData = existingDoc.data()
    
    console.log('📋 Found existing user:', userData)
    console.log('📍 Document ID:', existingDoc.id)
    
    // Update has_admin field
    await setDoc(doc(db, 'users', existingDoc.id), {
      ...userData,
      has_admin: true,
      role: 'admin',
      active: true,
      updatedAt: new Date().toISOString()
    })
    
    console.log('✅ Updated existing admin user with has_admin: true')
    
    return {
      success: true,
      adminUser: { ...userData, docId: existingDoc.id, has_admin: true }
    }
    
  } catch (error) {
    console.error('❌ Error fixing admin user:', error)
    return {
      success: false,
      error: error.message
    }
  }
}