import { useEffect } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ControlPanel from 'ControlPanel/ControlPanel';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';
import Container from 'components/Container';
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
      <h1 className="visually-hidden">Contacts</h1>

      <Section>
        <Container>
          <h2 className="visually-hidden">Control panel</h2>
          <ControlPanel />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="visually-hidden">Filter</h2>
          <Filter />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="visually-hidden">Contact list</h2>
          {!error && !isLoading && !items.length ? (
            <p className={css.info}>The contact list is empty!</p>
          ) : (
            <ContactList />
          )}
        </Container>
      </Section>
    </>
  );
};

export default ContactsPage;
