import { useEffect } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ControlPanel from 'ControlPanel/ControlPanel';
import Filter from 'components/Filter/Filter';
import SectionWithContainer from 'components/SectionWithContainer/SectionWithContainer';
import Message from 'components/Message/Message';
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

      <SectionWithContainer headText="Control panel" cssHeadClass="visually-hidden">
        <ControlPanel />
      </SectionWithContainer>

      <SectionWithContainer headText="Filter" cssHeadClass="visually-hidden">
        <Filter />
      </SectionWithContainer>

      <SectionWithContainer headText="Contact list" cssHeadClass="visually-hidden">
        {!error && !isLoading && !items.length ? (
          <Message message="The contact list is empty!" />
        ) : (
          <ContactList />
        )}
      </SectionWithContainer>
    </>
  );
};

export default ContactsPage;
