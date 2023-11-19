import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from 'components/App/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/contacts/selectors';
import { fetchContacts } from 'Redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.appTitle}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts:</h2>

      <Filter />

      {isLoading && <p className={css.info}>Loading...</p>}

      {error && <p className={css.info}>{error}</p>}

      {!error && !isLoading && !items.length ? (
        <p className={css.info}>The contact list is empty!</p>
      ) : (
        <ContactList />
      )}
    </>
  );
};

export default ContactsPage;
