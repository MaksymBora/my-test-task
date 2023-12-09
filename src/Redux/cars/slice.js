import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';
import { fetchFilteredAllCars } from '../Filter/operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog.push(...action.payload);

  state.error = null;
  state.isFilter = false;
};

const handleFilteredFulfilled = (state, action) => {
  state.isLoading = false;

  state.catalog = action.payload;

  state.error = null;
  state.isFilter = true;
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
    isFilter: false,
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
