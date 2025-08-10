# 🍰 Arunachalam Bakery - Admin Panel

A modern, responsive admin dashboard for managing orders, customers, and bakery operations.

## 🚀 Features

- **Real-time Order Management** - Live order tracking with status updates
- **Order Status Tracking** - Pending → Pickup → Completed workflow
- **Push Notifications** - Instant alerts for new orders
- **Mobile Responsive** - Works perfectly on all devices
- **Role-based Access** - Secure admin authentication
- **Dashboard Analytics** - Order statistics and revenue tracking
- **Custom Cake Orders** - Special handling for personalized cakes

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
cd admin
npm install
```

### 2. Configure Environment
Copy Firebase credentials from main app to `admin/.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Setup Admin User
The system automatically recognizes `admin@gmail.com` as an admin user. 

**To create the first admin:**
1. Login to main bakery app with `admin@gmail.com`
2. The system will automatically create admin role in Firestore
3. Now you can access the admin panel at `http://localhost:5176`

### 4. Run Admin Panel
```bash
npm run dev
```

The admin panel will be available at: `http://localhost:5176`

## 🔐 Admin Authentication

### Automatic Admin Setup
- Email: `admin@gmail.com` is automatically granted admin access
- No email verification required for admin accounts
- Admin role is stored in Firestore user document: `roles.admin: true`

### Adding More Admins
To make any user an admin, update their Firestore document:
```javascript
// In Firestore users collection
{
  "roles": {
    "admin": true,
    "staff": true,
    "customer": true
  }
}
```

## 📱 Admin Panel Structure

```
admin/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AdminNavbar.jsx
│   │   ├── AdminSidebar.jsx
│   │   └── AdminProtectedRoute.jsx
│   ├── pages/              # Main admin pages
│   │   ├── AdminLogin.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── AdminOrders.jsx
│   ├── context/            # State management
│   │   └── AdminAuthContext.jsx
│   ├── services/           # API services
│   │   └── adminOrderService.js
│   ├── utils/              # Helper functions
│   │   └── userDataStructure.js
│   └── config/             # Configuration
│       └── firebase.js
├── .env                    # Environment variables
└── README.md              # This file
```

## 🛠️ Order Management

### Order Status Flow
1. **Pending** - New order received
2. **Pickup** - Order ready for customer pickup
3. **Completed** - Order fulfilled and collected

### Status Update Buttons
- **Pending Orders**: Show "Mark as Pickup" button
- **Pickup Orders**: Show "Mark as Completed" button  
- **Completed Orders**: No action buttons (final state)

### Real-time Features
- Live order updates using Firestore real-time listeners
- Push notifications for new orders
- Auto-refresh dashboard statistics
- Real-time order count updates

## 🎂 Special Features

### Custom Cake Orders
- Automatic detection of cake orders
- Special cake customization display
- Purpose/occasion tracking
- Custom name and instructions

### Mobile Responsive Design
- Touch-friendly interface
- Optimized for tablets and phones
- Responsive navigation
- Mobile-first approach

### Notification System
- Browser push notifications for new orders
- Visual notification badges
- Audio alerts (can be enabled)

## 🔧 Technical Details

### Built With
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Firebase** - Backend services
- **Lucide React** - Modern icon library

### Performance Features
- Real-time Firestore subscriptions
- Optimistic updates for order status
- Lazy loading for large order lists
- Efficient re-renders with React hooks

## 🐛 Troubleshooting

### Common Issues

**1. Admin can't login**
- Verify Firebase credentials in `.env`
- Check if `admin@gmail.com` exists in Firebase Auth
- Ensure Firestore rules allow admin access

**2. Orders not showing**
- Check Firebase connection
- Verify Firestore rules for orders collection
- Check browser console for errors

**3. Notifications not working**
- Grant browser notification permissions
- Check if service worker is registered
- Verify Firebase messaging setup

### Debug Mode
Enable debug logs by adding to console:
```javascript
localStorage.setItem('admin_debug', 'true')
```

## 🚀 Production Deployment

1. Build the admin panel:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service
3. Update environment variables for production
4. Configure proper Firebase security rules

## 📞 Support

For technical support or questions:
- Check browser console for error messages
- Verify Firebase configuration
- Ensure proper admin user setup

---

**© 2024 Arunachalam Bakery Shop - Admin Panel v1.0**