import { showNotify } from 'js/notifyFunc';

export const handleRegisterRejected = (_, { payload }) => {
  if (!payload.status) {
    showNotify(payload.message, 'failure', 7000);
    return;
  }

  switch (payload.status) {
    case 400:
      showNotify('Failed to register user!', 'failure', 7000);
      return;
    case 500:
      showNotify('Server error!', 'failure', 7000);
      return;
    default:
      return;
  }
};
