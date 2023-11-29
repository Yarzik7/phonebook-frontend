import css from './AddButton.module.css';
import { MdAddIcCall } from 'react-icons/md';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/Modal/ModalContent/ModalContent';
import ContactForm from 'components/ContactForm';

const AddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <>
      <button className={css.addButton} onClick={toggleModal}>
        <MdAddIcCall size={40} />
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContent onClose={toggleModal}>
            <ContactForm onCloseModal={toggleModal} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default AddButton;
