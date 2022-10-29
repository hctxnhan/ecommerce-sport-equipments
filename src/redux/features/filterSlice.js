import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  category: 'all',
  price: 2000000,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setSearch, setCategory, setPrice } = filterSlice.actions;

export const selectFilterSearch = (state) => state.filter.search;
export const selectFilterCategory = (state) => state.filter.category;
export const selectFilterPrice = (state) => state.filter.price;

export default filterSlice.reducer;
