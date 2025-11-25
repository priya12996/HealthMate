//import { initializeApp } from "firebase/app";
//import {app,auth} from "./Firebase.config";

// src/components/Login/Firebase/Firebase.init.js
import { app, auth } from "./Firebase.config";

// Agar kahin aur initialize karna ho to directly export kar do
const initializeAuthentication = () => {
  return app;  // 👈 app already initialized hai
};

export default initializeAuthentication;
export { auth };
