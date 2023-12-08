import { createSlice } from '@reduxjs/toolkit';

const initialValuesState = {
  maker: null,
  price: 40,
  mileageFrom: 0,
  mileageTo: 999999,
};
const slice = createSlice({
  name: 'filter',
  initialState: {
    formData: initialValuesState,
  },
  reducers: {
    carsFilter(state, action) {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
  },
});

export const { carsFilter } = slice.actions;
export const filterReducer = slice.reducer;
