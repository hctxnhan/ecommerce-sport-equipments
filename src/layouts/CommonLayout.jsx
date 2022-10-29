import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import UserProfile from '../components/UserProfile';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Shop from '../pages/Shop';

function CommonLayout() {
  return (
    <>
      <NavBar />

      <div className='mt-[60px]'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shop' element={<Shop />} />
          <Route path='product' element={<Product />} />
          <Route path='account' element={<UserProfile />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default CommonLayout;
