import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './cars/slice';

export const store = configureStore({
  reducer: {
    cars: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
