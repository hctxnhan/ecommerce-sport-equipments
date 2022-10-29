import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './features/categoriesSlice';
import filterReducer from './features/filterSlice';
import cartReducer from './features/cartSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    filter: filterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
