import { handleAddContactFulfilled } from './addContactsActionHandlers';
import {
  handleDeleteContactFulfilled,
  handleDeleteContactPending,
  handleDeleteContactRejected,
} from './deleteContactsActionHandlers';
import { handleFetchContactsFulfilled } from './fetchContactsActionHandlers';
import { handleUpdateContactFulfilled } from './updateContactActionHandlers';

import { handleContactsPending } from './handleContactsPending';
import { handleContactsRejected } from './handleContactsRejected';

export {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleDeleteContactPending,
  handleDeleteContactRejected,
  handleFetchContactsFulfilled,
  handleUpdateContactFulfilled,
  handleContactsPending,
  handleContactsRejected,
};
