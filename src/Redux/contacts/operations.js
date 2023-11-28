import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'js/handleErrorAsyncOperation';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }, thunkAPI);
});

const addContact = createAsyncThunk('contacts/addContacts', async (newContact, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  }, thunkAPI);
});

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updData }, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.patch(`/contacts${contactId}`, updData);
      return data;
    }, thunkAPI);
  }
);

const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  }, thunkAPI);
});

export { fetchContacts, addContact, deleteContact, updateContact };
