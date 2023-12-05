import { showNotify } from 'js/notifyFunc';

export const handleRefreshUserRejected = (state, { payload }) => {
  state.isRefreshingUser = false;

  if (payload === 'Please log in or register!') {
    showNotify(payload, 'info', 7000);
    return;
  }

  switch (payload.status) {
    case 401:
      showNotify('Missing header with authorization token!', 'failure', 7000);
      return;
    case 500:
      showNotify('Server error!', 'failure', 7000);
      return;
    default:
      return;
  }
};
