import { showNotify } from 'js/notifyFunc';

const handleLogInRejected = (_, { payload  }) => {
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

const handleRegisterRejected = (_, { payload } ) => {
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

const handleLogOutRejected = (_, { payload }) => {
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

export { handleLogInRejected, handleLogOutRejected, handleRegisterRejected };
