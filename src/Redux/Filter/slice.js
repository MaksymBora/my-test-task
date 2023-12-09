import { createSlice } from '@reduxjs/toolkit';

const initialValuesState = {
  make: null,
  price: null,
  mileageFrom: 0,
  mileageTo: 0,
};
const slice = createSlice({
  name: 'filter',
  initialState: {
    formData: initialValuesState,
  },
  reducers: {
    carsFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { carsFilter } = slice.actions;
export const filterReducer = slice.reducer;
