export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = null;
  const index = state.items.findIndex(({ id }) => id === payload.id);
  state.items.splice(index, 1);
  state.currentContactId = null;
};
