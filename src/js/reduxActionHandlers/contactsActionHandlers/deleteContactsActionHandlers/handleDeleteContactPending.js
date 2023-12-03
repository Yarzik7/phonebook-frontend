export const handleDeleteContactPending = (state, action) => {
  state.error = null;
  state.isLoading = true;
  state.isDeleting = true;
  state.currentContactId = action.meta.arg;
};
