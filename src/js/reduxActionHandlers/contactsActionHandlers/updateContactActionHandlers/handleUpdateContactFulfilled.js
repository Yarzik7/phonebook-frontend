export const handleUpdateContactFulfilled = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  const idx = state.items.findIndex(({ id }) => id === payload.id);
  state.items[idx] = { ...state.items[idx], ...payload };
};
