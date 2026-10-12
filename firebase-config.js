// Replace every placeholder with values from Firebase Console > Project settings > Your apps.
// Keep the config in this file; Firebase web config is not a password. Secure access with Firebase Rules.
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_FIREBASE_APP_ID"
};

// Enter the exact owner email address that you create in Firebase Authentication.
export const OWNER_EMAIL = "PASTE_OWNER_EMAIL_HERE";
