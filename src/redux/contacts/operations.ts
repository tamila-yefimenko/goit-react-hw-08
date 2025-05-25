import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../auth/operations';
import {
  Contact,
  NewContact,
  UpdateContactData,
} from '../../components/App/App.types';

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: string }
>('fetchAll', async (_, thunkAPI) => {
  try {
    const response = await goitAPI.get('/contacts');
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  NewContact,
  { rejectValue: string }
>('addContact', async (contact, thunkAPI) => {
  try {
    const response = await goitAPI.post('/contacts', contact);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('deleteContact', async (contactId, thunkAPI) => {
  try {
    await goitAPI.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk<
  Contact,
  UpdateContactData,
  { rejectValue: string }
>('updateContact', async ({ id, ...updateData }, thunkAPI) => {
  try {
    const response = await goitAPI.patch(`/contacts/${id}`, updateData);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
