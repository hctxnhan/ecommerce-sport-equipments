import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadAllCategories } from '../../firebase/firestore';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const result = await loadAllCategories();
    return result;
  }
);

export default categoriesSlice.reducer;

export const selectCategories = (state) => state.categories.categories;
export const selectCategoriesLoading = (state) => state.categories.loading;
export const selectCategoriesError = (state) => state.categories.error;

export { fetchCategories };
