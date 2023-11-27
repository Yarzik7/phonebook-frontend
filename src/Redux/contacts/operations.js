import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'js/handleErrorAsyncOperation';
import axios from 'axios';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }, thunkAPI);
});

const addContact = createAsyncThunk('contacts/addContacts', async (data, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/contacts', data);
    return data;
  }, thunkAPI);
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  }, thunkAPI);
});

export { fetchContacts, addContact, deleteContact };
