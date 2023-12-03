const selectContacts = state => state.contacts;
const selectIsDeleting = state => state.contacts.isDeleting;
const selectCurrentContactId = state => state.contacts.currentContactId;

export { selectContacts, selectIsDeleting, selectCurrentContactId };
