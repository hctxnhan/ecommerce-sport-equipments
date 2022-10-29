import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { fetchCategories } from './redux/features/categoriesSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener } from './firebase/auth';
import { authChanged } from './redux/features/userSlice';

import Checkout from './pages/Checkout';
import CommonLayout from './layouts/CommonLayout';
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
    <div className='App font-archivo relative w-full bg-slate-200'>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/*' element={<CommonLayout />} />
      </Routes>
    </div>
  );
}

export default App;
