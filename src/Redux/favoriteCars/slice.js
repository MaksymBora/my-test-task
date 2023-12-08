import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    cars: [],
  },
  reducers: {
    addToFavorites(state, action) {
      state.cars.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const favoritesCarsReducer = slice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedCarsReducer = persistReducer(
  persistConfig,
  favoritesCarsReducer
);

export const { addToFavorites, removeFromFavorites } = slice.actions;
