import css from './AddButton.module.css';
import { MdAddIcCall } from 'react-icons/md';
import { useShowModal } from 'hooks';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm';

const AddButton = () => {
  const { showModal, toggleModal, backdropRef, contentRef } = useShowModal();

  return (
    <>
      <button className={css.addButton} onClick={toggleModal}>
        <MdAddIcCall size={40} />
      </button>

      {showModal && (
        <Modal onClose={toggleModal} backdropRef={backdropRef} contentRef={contentRef}>
          <ContactForm onCloseModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default AddButton;
