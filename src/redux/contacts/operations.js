import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await goitAPI.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await goitAPI.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'updateContact',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.patch(`/contacts/${body.id}`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
