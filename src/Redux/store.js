import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './cars/slice';
import { persistedCarsReducer } from './favoriteCars/slice';
import { persistStore } from 'redux-persist';
import { filterReducer } from './Filter/slice';
import { persistedThemeSwitcher } from './Theme/slice';

export const store = configureStore({
  reducer: {
    cars: contactsReducer,
    favorites: persistedCarsReducer,
    filter: filterReducer,
    themeCars: persistedThemeSwitcher,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
