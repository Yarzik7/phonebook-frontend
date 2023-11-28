import PropTypes from 'prop-types';
import { FaTrash, FaPen } from 'react-icons/fa';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/Modal/ModalContent/ModalContent';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';

const ContactItem = ({ name, number, contactId }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => setShowModal(showModal => !showModal);
  const handleDeleteContact = () => dispatch(deleteContact(contactId));

  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.caption}>Name: {name}</p>
        <p className={css.caption}>Number: {number}</p>
      </div>

      <div className={css.buttonContainer}>
        <button type="button" className={css.button} onClick={toggleModal}>
          <FaPen />
        </button>
        <button type="button" className={css.button} onClick={handleDeleteContact}>
          <FaTrash />
        </button>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContent onClose={toggleModal}>
            <ContactForm />
          </ModalContent>
        </Modal>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;
