import ContactItem from '../ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'Redux/contacts/selectors';

const ContactList = () => {
  const items = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {items.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} contactId={id} />
      ))}
    </ul>
  );
};

export default ContactList;
