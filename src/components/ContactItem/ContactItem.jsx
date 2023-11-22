import PropTypes from 'prop-types';
import { FaTrash, FaPen } from 'react-icons/fa';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';

const ContactItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contactId));

  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.caption}>Name: {name}</p>
        <p className={css.caption}>Number: {number}</p>
      </div>

      <div className={css.buttonContainer}>
        <button type="button" className={css.button} onClick={() => {}}>
          <FaPen />
        </button>
        <button type="button" className={css.button} onClick={handleDeleteContact}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;
