// src/Hooks/useAuth.js
import { useEffect, useState } from "react";
import { auth } from "../components/Login/Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
const [loading, setLoading] = useState(true); // 🔹 added


  // Register
  const register = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        updateProfile(res.user, { displayName: name });
        setUser(res.user);
      })
      .catch(err => setError(err.message));
  };

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(res => setUser(res.user))
      .catch(err => setError(err.message));
  };

  // Logout
  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };

  // Track auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); //
    });
    return () => unsub();
  }, []);

  return { user, error, register, login, logout,loading };
};

export default useAuth;
