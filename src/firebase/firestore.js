import { db } from './firebase';
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
} from 'firebase/firestore';

export async function loadACategory(categoryId) {
  const itemsRef = collection(db, 'categories', categoryId, 'items');
  const querySnapshot = await getDocs(itemsRef);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return items;
}

export const loadAllCategories = async () => {
  const categoriesRef = collection(db, 'categories');
  const querySnapshot = await getDocs(categoriesRef);
  const categories = [];

  for (const doc of querySnapshot.docs) {
    categories.push({
      id: doc.data().title,
    });
  }

  const result = await Promise.all(
    categories.map(async (category) => {
      const items = await loadACategory(category.id);
      const data = {
        ...category,
        items,
      };
      return data;
    })
  );

  return result;
};

export const createAllCategories = async (categories) => {
  const categoriesRef = collection(db, 'categories');
  categories.forEach(async (category) => {
    const categoryDocRef = doc(categoriesRef, category.id);
    await setDoc(categoryDocRef, { title: category.id });
    await createAllItems(category.id, category.items);
  });
};

export const createAllItems = async (category, items) => {
  const categoryItemsRef = collection(db, 'categories', category, 'items');

  items.forEach(async (item) => {
    await addDoc(categoryItemsRef, item);
  });
};

export async function createUserAdditionalData(userId, additionalData) {
  const usersRef = collection(db, 'users');
  const userDocRef = doc(usersRef, userId);
  await setDoc(userDocRef, additionalData);
}

export async function loadUserAdditionalData(userId) {
  const usersRef = collection(db, 'users');
  const userDocRef = doc(usersRef, userId);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}
