export const handleDeleteContactRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = payload;
  state.currentContactId = null;
};
