import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logOut } from 'Redux/auth/operations';
import * as contactsReducers from '../../js/reduxActionHandlers/contactsActionHandlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isDeleting: false,
    isFetching: false,
    currentContactId: null,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, contactsReducers.handleContactsPending)
      .addCase(addContact.fulfilled, contactsReducers.handleAddContactFulfilled)
      .addCase(addContact.rejected, contactsReducers.handleContactsRejected)
      .addCase(fetchContacts.pending, contactsReducers.handleFetchContactsPending)
      .addCase(fetchContacts.fulfilled, contactsReducers.handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, contactsReducers.handleFetchContactsRejected)
      .addCase(deleteContact.pending, contactsReducers.handleDeleteContactPending)
      .addCase(deleteContact.fulfilled, contactsReducers.handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, contactsReducers.handleDeleteContactRejected)
      .addCase(updateContact.pending, contactsReducers.handleContactsPending)
      .addCase(updateContact.fulfilled, contactsReducers.handleUpdateContactFulfilled)
      .addCase(updateContact.rejected, contactsReducers.handleContactsRejected)
      .addCase(logOut.fulfilled, contactsReducers.handleLogoutContactsFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
