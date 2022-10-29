import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createUserAdditionalData, loadUserAdditionalData } from './firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const defaultAvatarUrl =
  'https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg';

export const loginUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const registerUserWithEmailAndPassword = async (
  emailInput,
  passwordInput,
  nameInput,
  imageUrlInput = defaultAvatarUrl
) => {
  if (!emailInput || !passwordInput) return;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailInput,
      passwordInput
    );

    if (userCredential) {
      await createUserAdditionalData(userCredential.user.uid, {
        name: nameInput,
        imageUrl: imageUrlInput,
      });
    }
    // signed in!
  } catch (error) {
    console.log(error);
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

const GoogleProvider = new GoogleAuthProvider();

export const loginWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, GoogleProvider);
    const user = result.user;
    const userAdditionalData = await loadUserAdditionalData(user.uid);
    if (!userAdditionalData) {
      await createUserAdditionalData(user.uid, {
        name: user.displayName,
        imageUrl: user.photoURL,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
