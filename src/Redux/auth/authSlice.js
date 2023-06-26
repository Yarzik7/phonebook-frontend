import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import {
  handleLogInRejected,
  handleLogOutRejected,
  handleRegisterRejected,
  handleRefreshUserRejected,
} from 'js/helpers';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handleRegisterRejected,

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleLogInRejected,

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleLogOutRejected,

    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected]: handleRefreshUserRejected,
  },
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
