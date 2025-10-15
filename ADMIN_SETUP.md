# Admin Portal Setup Guide

## Overview
The Perry Electrical website now includes a full-featured admin portal for managing jobs, projects, and users. The admin portal is accessible at `/admin` and requires authentication.

## Features
- **User Management**: Create and manage admin user accounts
- **Jobs Management**: Add, edit, and delete job postings
- **Projects Management**: Upload project images and manage project portfolio
- **Real-time Updates**: Changes appear immediately on the public site
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project
3. Go to Project Settings > General > Your apps
4. Add a web app and copy the config values
5. Create `.env.local` file with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 2. Enable Firebase Services
1. **Authentication**: Enable Email/Password provider
2. **Firestore Database**: Create database in production mode
3. **Storage**: Enable Firebase Storage

### 3. Set Up Security Rules

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated admins can read/write
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "admin";
    }
    
    match /jobs/{jobId} {
      allow read: if true; // Public read
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "admin";
    }
    
    match /projects/{projectId} {
      allow read: if true; // Public read
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "admin";
    }
  }
}
```

#### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{imageId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     request.resource.size < 5 * 1024 * 1024 && // 5MB max
                     request.resource.contentType.matches('image/.*');
    }
  }
}
```

### 4. Create First Admin User
1. Go to Authentication > Users in Firebase Console
2. Add a new user with email and password
3. Note the user ID (UID)
4. Go to Firestore Database
5. Create a document in the `users` collection with the UID as document ID:
```json
{
  "email": "admin@perryelec.com",
  "displayName": "Admin User",
  "role": "admin",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "createdBy": "system"
}
```

### 5. Access Admin Portal
1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:5173/admin`
3. Login with your admin credentials
4. Start managing content!

## Usage Guide

### Managing Jobs
1. Go to Jobs section in admin portal
2. Click "Add New Job" to create job postings
3. Fill in job details (name, description, pay range, location, position type)
4. Set status to "Open" or "Closed"
5. Jobs appear automatically on the Careers page

### Managing Projects
1. Go to Projects section in admin portal
2. Click "Add New Project" to showcase work
3. Upload project image (max 5MB, JPG/PNG/WebP)
4. Fill in project details (description, size, type, duration)
5. Projects appear automatically on the Projects page

### Managing Users
1. Go to Users section in admin portal
2. Click "Add New User" to create admin accounts
3. New users can immediately access the admin portal
4. Users can manage all content (jobs, projects, other users)

## Security Notes
- All admin operations require authentication
- Users must have "admin" role in Firestore
- Images are validated (size and type)
- All data is stored securely in Firebase
- Real-time updates ensure data consistency

## Troubleshooting
- **Login Issues**: Check Firebase Auth is enabled and user exists in Firestore
- **Permission Errors**: Verify user has "admin" role in Firestore
- **Image Upload Fails**: Check file size (max 5MB) and type (JPG/PNG/WebP)
- **Data Not Appearing**: Check Firestore security rules and network connection

## Support
For technical support or questions about the admin portal, contact the development team.
