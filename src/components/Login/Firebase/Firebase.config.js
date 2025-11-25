import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
// ✅ Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Initialize Firebase Auth
const auth = getAuth(app);

//Export so other files can use the same instance
export { app, auth };