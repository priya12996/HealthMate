// src/hooks/useFirebase.js
import { useState, useEffect } from "react";
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  GithubAuthProvider, 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  sendPasswordResetEmail, 
  updateProfile 
} from "firebase/auth";

import { auth } from "../firebase/Firebase.config"; // use the single initialized auth

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({});
  const [isLogin, setisLogin] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Google, Facebook, GitHub sign-in
  const singInUsingGoogle = () => signInWithPopup(auth, googleProvider);
  const singInUsingFacebook = () => signInWithPopup(auth, facebookProvider);
  const singInUsingGithub = () => signInWithPopup(auth, githubProvider);

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || {});
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth).then(() => setUser({})).catch(setError);

  // Registration and login
  const handleRegister = e => {
    e.preventDefault();
    if (password.length < 6) return setError('Password must be at least 6 characters');
    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password))
      return setError('Password must contain at least one letter and one number');

    isLogin ? loginRegisterUser(mail, password) : registerUser(mail, password);
  }

  const registerUser = (mail, password) => {
    createUserWithEmailAndPassword(auth, mail, password)
      .then(result => {
        updateProfile(auth.currentUser, { displayName: userName });
        verifyUserMail();
        setError('');
      })
      .catch(err => setError(err.message));
  }

  const loginRegisterUser = (mail, password) => {
    signInWithEmailAndPassword(auth, mail, password)
      .then(() => setError(''))
      .catch(err => setError(err.message));
  }

  const verifyUserMail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setError('Verification email sent');
    });
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, mail)
      .then(() => setError('Password reset email sent'))
      .catch(err => setError(err.message));
  }

  // Handlers
  const handleUserName = e => setUserName(e.target.value);
  const handleEmail = e => setMail(e.target.value);
  const handlePass = e => setPass(e.target.value);
  const handleConfirmPass = e => {
    const confirmPass = e.target.value;
    if (password !== confirmPass) {
      setPass('');
      setError('Password does not match');
    } else setError('');
  }
  const toggleLogin = e => setisLogin(e);

  return {
    singInUsingGoogle,
    singInUsingFacebook,
    singInUsingGithub,
    user,
    setUser,
    isLogin,
    setisLogin,
    logout,
    handleRegister,
    handlePasswordReset,
    handleUserName,
    handleEmail,
    handlePass,
    error,
    setError,
    loginRegisterUser,
    handleConfirmPass,
    toggleLogin,
    isLoading
  }
}

export default useFirebase;
