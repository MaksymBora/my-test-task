import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFilteredAllCars = createAsyncThunk(
  'cars/filteredCars',
  async ({ make, price }, thunkAPI) => {
    const filter = (make !== null && make) || (price !== null && price);

    try {
      const url = new URL('https://65721f49d61ba6fcc0146a07.mockapi.io/cars');
      url.searchParams.append('filter', filter);

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
