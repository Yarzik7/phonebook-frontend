import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import * as authReducers from 'js/reduxActionHandlers/authActionHandlers';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, authReducers.handleRegisterFulfilled)
      .addCase(register.rejected, authReducers.handleRegisterRejected)
      .addCase(logIn.fulfilled, authReducers.handleLoginFulfilled)
      .addCase(logIn.rejected, authReducers.handleLoginRejected)
      .addCase(logOut.fulfilled, authReducers.handleLogoutFulfilled)
      .addCase(logOut.rejected, authReducers.handleLogoutRejected)
      .addCase(refreshUser.fulfilled, authReducers.handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, authReducers.handleRefreshUserRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
