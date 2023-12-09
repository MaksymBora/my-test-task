import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchFilteredAllCars } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog.push(...action.payload);

  state.error = null;
};

const handleFilteredFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog = action.payload;

  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'cars',
  initialState: {
    catalog: [],

    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, handleFulfilled)
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchFilteredAllCars.pending, handlePending)
      .addCase(fetchFilteredAllCars.fulfilled, handleFilteredFulfilled)
      .addCase(fetchFilteredAllCars.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
