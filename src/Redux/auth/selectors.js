const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export { selectIsLoggedIn, selectUser, selectIsRefreshingUser };
