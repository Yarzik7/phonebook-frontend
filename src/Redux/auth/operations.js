import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleErrorAsyncOperation } from 'js/handleErrorAsyncOperation';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const res = await axios.post('/users/signup', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  }, thunkAPI);
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const res = await axios.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  }, thunkAPI);
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  }, thunkAPI);
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Please log in or register!');
  }

  return await handleErrorAsyncOperation(async () => {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  }, thunkAPI);
});

export { register, logIn, logOut, refreshUser };
