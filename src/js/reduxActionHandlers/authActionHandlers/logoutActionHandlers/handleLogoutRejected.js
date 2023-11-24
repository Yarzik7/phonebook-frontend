import { showNotify } from 'js/notifyFunc';

export const handleLogoutRejected = (_, { payload }) => {
  if (!payload.status) {
    showNotify(payload.message, 'failure', 7000);
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
