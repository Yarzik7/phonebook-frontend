import css from './AddButton.module.css';
import { MdAddIcCall } from 'react-icons/md';
import { useAnimatedShowModal } from 'hooks';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm';

const AddButton = () => {
  const { showModal, toggleAnimatedModal, backdropRef, contentRef } = useAnimatedShowModal();

  return (
    <>
      <button className={css.addButton} onClick={toggleAnimatedModal}>
        <MdAddIcCall size={40} />
      </button>

      {showModal && (
        <Modal onClose={toggleAnimatedModal} backdropRef={backdropRef} contentRef={contentRef}>
          <ContactForm onCloseModal={toggleAnimatedModal} />
        </Modal>
      )}
    </>
  );
};

export default AddButton;
