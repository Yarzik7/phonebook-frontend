import { handleAddContactFulfilled } from './addContactsActionHandlers';
import {
  handleDeleteContactFulfilled,
  handleDeleteContactPending,
  handleDeleteContactRejected,
} from './deleteContactsActionHandlers';
import {
  handleFetchContactsFulfilled,
  handleFetchContactsPending,
  handleFetchContactsRejected,
} from './fetchContactsActionHandlers';
import { handleUpdateContactFulfilled } from './updateContactActionHandlers';
import { handleLogoutContactsFulfilled } from './logoutActionContactsHandlers';

import { handleContactsPending } from './handleContactsPending';
import { handleContactsRejected } from './handleContactsRejected';

export {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleDeleteContactPending,
  handleDeleteContactRejected,
  handleFetchContactsFulfilled,
  handleFetchContactsPending,
  handleFetchContactsRejected,
  handleUpdateContactFulfilled,
  handleContactsPending,
  handleContactsRejected,
  handleLogoutContactsFulfilled,
};
