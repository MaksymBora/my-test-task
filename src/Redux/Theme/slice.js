/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const slice = createSlice({
  name: 'themeCars',
  initialState: {
    themeMode: false,
  },
  reducers: {
    switchThemeMode(state, _) {
      state.themeMode = !state.themeMode;
    },
  },
});

export const darkThemeReducer = slice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedThemeSwitcher = persistReducer(
  persistConfig,
  darkThemeReducer
);

export const { switchThemeMode, setThemeModeOnLoad } = slice.actions;
