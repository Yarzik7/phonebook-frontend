export const handleFetchContactsRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};
