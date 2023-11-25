import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import * as contactsReducers from '../../js/reduxActionHandlers/contactsActionHandlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, contactsReducers.handleContactsPending)
      .addCase(addContact.fulfilled, contactsReducers.handleAddContactFulfilled)
      .addCase(addContact.rejected, contactsReducers.handleContactsRejected)
      .addCase(fetchContacts.pending, contactsReducers.handleContactsPending)
      .addCase(fetchContacts.fulfilled, contactsReducers.handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, contactsReducers.handleContactsRejected)
      .addCase(deleteContact.pending, contactsReducers.handleContactsPending)
      .addCase(deleteContact.fulfilled, contactsReducers.handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, contactsReducers.handleContactsRejected),
});

export const contactsReducer = contactsSlice.reducer;
