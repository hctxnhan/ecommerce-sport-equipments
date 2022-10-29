import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Error from './pages/Error';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import Product from './pages/Product';
import { fetchCategories } from './redux/features/categoriesSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener } from './firebase/auth';
import { authChanged } from './redux/features/userSlice';
import UserProfile from './components/UserProfile';
import Checkout from './pages/Checkout';
// import { categories } from './mockData';
// import { createAllCategories } from './firebase/firestore';

// createAllCategories(categories);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    console.log('call');
    onAuthStateChangedListener((user) => {
      dispatch(authChanged(user));
    });
  }, []);

  return (
    <div className='App font-archivo relative w-full'>
      <NavBar />

      <div className='mt-[60px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
