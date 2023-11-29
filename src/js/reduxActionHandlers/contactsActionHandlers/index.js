import { handleAddContactFulfilled } from './addContactsActionHandlers';
import { handleDeleteContactFulfilled } from './deleteContactsActionHandlers';
import { handleFetchContactsFulfilled } from './fetchContactsActionHandlers';
import { handleUpdateContactFulfilled } from './updateContactActionHandlers';

import { handleContactsPending } from './handleContactsPending';
import { handleContactsRejected } from './handleContactsRejected';

export {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleFetchContactsFulfilled,
  handleUpdateContactFulfilled,
  handleContactsPending,
  handleContactsRejected,
};
