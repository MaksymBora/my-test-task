import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65721f49d61ba6fcc0146a07.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  'cars/catalog',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
