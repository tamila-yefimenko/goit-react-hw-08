import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { string } from 'yup';
import { RootState } from '../store';
import {
  RegisterResponse,
  RegisterBody,
  LoginResponse,
  LoginBody,
  refreshResponse,
} from '../../components/App/App.types';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthNav = (token: string) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthNav = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk<
  RegisterResponse,
  RegisterBody,
  { rejectValue: string }
>('auth/register', async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post<RegisterResponse>(
      '/users/signup',
      body
    );
    console.log('response', response.data);
    setAuthNav(response.data.token);
    return response.data;
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error) {
      message = (error as Error).message;
    }
    return thunkAPI.rejectWithValue(message);
  }
});

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginBody,
  { rejectValue: string }
>('auth/login', async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post('/users/login', body);
    setAuthNav(response.data.token);
    return response.data;
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error) {
      message = (error as Error).message;
    }
    return thunkAPI.rejectWithValue(message);
  }
});

export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('auth/logout', async (_, thunkAPI) => {
  try {
    await goitAPI.post('/users/logout');
    removeAuthNav();
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error) {
      message = (error as Error).message;
    }
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshThunk = createAsyncThunk<
  refreshResponse,
  void,
  { state: RootState; rejectValue: string }
>('auth/refresh', async (_, thunkAPI) => {
  try {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthNav(persistedToken);

    const response = await goitAPI.get('/users/current');
    return response.data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return thunkAPI.rejectWithValue(message);
  }
});
