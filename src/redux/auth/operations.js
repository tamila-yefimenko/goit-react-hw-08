import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthNav = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthNav = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/signup', body);
      setAuthNav(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/login', body);
      setAuthNav(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitAPI.post('/users/logout');
      removeAuthNav();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      if (!persistedToken) {
        return thunkAPI.rejectWithValue('No valid token');
      }
      setAuthNav(persistedToken);

      const response = await goitAPI.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
