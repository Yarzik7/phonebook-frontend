import { showNotify } from 'js/notifyFunc';

export const handleLoginRejected = (_, { payload }) => {
  if (!payload.status) {
    showNotify(payload.message, 'failure', 7000);
    return;
  }

  switch (payload.status) {
    case 400:
      showNotify('This user is not registered!', 'failure', 7000);
      return;
    default:
      return;
  }
};
