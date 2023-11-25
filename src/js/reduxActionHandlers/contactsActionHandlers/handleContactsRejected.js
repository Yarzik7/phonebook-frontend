export const handleContactsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
