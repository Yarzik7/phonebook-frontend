import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'Redux/filter/selectors';

const selectContacts = state => state.contacts.items;
const selectIsDeleting = state => state.contacts.isDeleting;
const selectIsLoading = state => state.contacts.isLoading;
const selectIsFetching = state => state.contacts.isFetching;
const selectError = state => state.contacts.error;
const selectCurrentContactId = state => state.contacts.currentContactId;

const selectVisibleContacts = createSelector([selectFilter, selectContacts], (filter, items) => {
  return {
    items: items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())),
    allLength: items.length,
  };
});

export {
  selectContacts,
  selectIsDeleting,
  selectIsLoading,
  selectIsFetching,
  selectError,
  selectCurrentContactId,
  selectVisibleContacts,
};
