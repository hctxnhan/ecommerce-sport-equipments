import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadUserAdditionalData } from '../../firebase/firestore';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authChanged.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const authChanged = createAsyncThunk('user/authChanged', async (user) => {
  console.log(user, 'inside slice');
  try {
    if (user) {
      const userAdditionalData = await loadUserAdditionalData(user.uid);
      console.log(userAdditionalData);
      const { uid, email, emailVerified } = user;
      const data = { uid, email, emailVerified, ...userAdditionalData };
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
});

export { authChanged };
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
