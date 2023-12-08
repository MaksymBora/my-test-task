import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCars = createAsyncThunk(
  'cars/catalog',
  async (page, thunkAPI) => {
    try {
      const url = new URL('https://65721f49d61ba6fcc0146a07.mockapi.io/cars');
      url.searchParams.append('completed', false);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);

      const response = await axios.get(url, (page = 1));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
