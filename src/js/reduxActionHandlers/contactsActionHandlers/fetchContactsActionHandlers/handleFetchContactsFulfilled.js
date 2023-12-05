export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.error = null;
  state.items = payload;
};
