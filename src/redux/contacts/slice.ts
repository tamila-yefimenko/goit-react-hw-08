import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations.js';
import { logoutThunk } from '../auth/operations.js';
import { ContactState } from '../../components/App/App.types.js';

const initialState: ContactState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addMatcher(
        isAnyOf(
          updateContact.pending,
          addContact.pending,
          fetchContacts.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          updateContact.rejected,
          addContact.rejected,
          fetchContacts.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload ?? 'Unknown error';
        }
      )
      .addMatcher(
        isAnyOf(
          updateContact.fulfilled,
          addContact.fulfilled,
          fetchContacts.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
