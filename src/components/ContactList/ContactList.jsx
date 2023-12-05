import { Loader } from 'components/Loader/Loader';
import ContactItem from '../ContactItem';
import Message from 'components/Message/Message';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts, selectIsFetching, selectError } from 'Redux/contacts/selectors';

const ContactList = () => {
  const { items, allLength } = useSelector(selectVisibleContacts);
  const isFetching = useSelector(selectIsFetching);
  const error = useSelector(selectError);

  return (
    <>
      <Message>
        {error && error.message + '\n'}
        {!isFetching && !error && !allLength && 'The contact list is empty!\n'}
        {!items.length && !!allLength && 'No matches found!\n'}
      </Message>
      {isFetching ? (
        <Loader />
      ) : (
        <ul className={css.contactList}>
          {items.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} contactId={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
