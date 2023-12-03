import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'Redux/filter/selectors';

const selectContacts = state => state.contacts.items;
const selectIsDeleting = state => state.contacts.isDeleting;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;
const selectCurrentContactId = state => state.contacts.currentContactId;

const selectVisibleContacts = createSelector([selectFilter, selectContacts], (filter, items) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});

export {
  selectContacts,
  selectIsDeleting,
  selectIsLoading,
  selectError,
  selectCurrentContactId,
  selectVisibleContacts,
};
