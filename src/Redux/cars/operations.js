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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAllCars = createAsyncThunk(
  'cars/filteredCars',
  async ({ make, price }, thunkAPI) => {
    const filter =
      (make !== null && make) || (price !== null && '$' + String(price));

    try {
      const url = new URL('https://65721f49d61ba6fcc0146a07.mockapi.io/cars');
      url.searchParams.append('filter', filter);
      // url.searchParams.append('completed', false);
      // url.searchParams.append('page', 1);
      url.searchParams.append('limit', 12);

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
