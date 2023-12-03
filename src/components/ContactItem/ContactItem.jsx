import PropTypes from 'prop-types';
import { FaTrash, FaPen } from 'react-icons/fa';
import css from './ContactItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';
import { selectCurrentContactId, selectIsDeleting } from 'Redux/contacts/selectors';
import { useAnimatedShowModal } from 'hooks';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm';
import Confirm from 'components/Confirm/Confirm';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { memo } from 'react';
import { showNotify } from 'js/notifyFunc';

const ContactItem = ({ name, number, contactId }) => {
  const { showModal, toggleAnimatedModal, backdropRef, contentRef } = useAnimatedShowModal();
  const [action, setAction] = useState(null);
  // console.log(`action ${action} ${name} ${contactId}`);
  // console.log(`render ${name} ${contactId}`);
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  // console.log(`isDeleting ${isDeleting} ${name} ${contactId}`);
  // console.log(`showModal ${showModal} ${name} ${contactId}`);
  const currentContactId = useSelector(selectCurrentContactId);

  const handleActionContact = ({ currentTarget: { tagName, name } }) => {
    if (tagName !== 'BUTTON') {
      return;
    }

    setAction(name);
    toggleAnimatedModal();
  };

  const handleDeleteContact = async () => {
    // console.log('req');
    const operationResult = await dispatch(deleteContact(contactId));
    // console.log('reqed');

    // if (operationResult.error) {
    //   showNotify(operationResult.payload.message, 'failure');
    //   console.log('error');
    // }

    // if (!operationResult.error) {
    //   showNotify('Successful!', 'succsess');
    //   console.log('suc');
    // }

    // console.log('toogle');
    toggleAnimatedModal();
    // console.log('toged');
  };

  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.caption}>Name: {name}</p>
        <p className={css.caption}>Number: {number}</p>
      </div>

      <div className={css.buttonContainer}>
        <button
          disabled={isDeleting}
          type="button"
          name="update"
          className={css.button}
          onClick={handleActionContact}
        >
          <FaPen />
        </button>
        <button
          disabled={isDeleting}
          type="button"
          name="delete"
          className={css.button}
          onClick={handleActionContact}
        >
          {isDeleting && contactId === currentContactId ? (
            <Loader
              size="20px"
              color="var(--primary-dark-color)"
              secondaryColor="var(--primary-dark-color)"
            />
          ) : (
            <FaTrash />
          )}
        </button>
      </div>
      {showModal && (
        <Modal onClose={toggleAnimatedModal} backdropRef={backdropRef} contentRef={contentRef}>
          {action === 'delete' && (
            <Confirm
              contactName={name}
              onConfirmed={handleDeleteContact}
              onNotConfirmed={toggleAnimatedModal}
            />
          )}

          {action === 'update' && (
            <ContactForm
              onCloseModal={toggleAnimatedModal}
              currentContact={{ name, number, contactId }}
            />
          )}
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
