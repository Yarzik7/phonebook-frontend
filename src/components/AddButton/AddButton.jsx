import css from './AddButton.module.css';
import { MdAddIcCall } from 'react-icons/md';
import { useShowModalWithCloseAnimation } from 'hooks';
import Modal from 'components/Modal/Modal';
import ContactForm from 'components/ContactForm';

const AddButton = () => {
  const { showModal, backdropRef, contentRef, onAnimationEnd, onToggleModal } =
    useShowModalWithCloseAnimation();

  return (
    <>
      <button className={css.addButton} onClick={onToggleModal}>
        <MdAddIcCall size={40} />
      </button>

      {showModal && (
        <Modal
          onClose={onToggleModal}
          onAnimationEnd={onAnimationEnd}
          backdropRef={backdropRef}
          contentRef={contentRef}
        >
          <ContactForm onCloseModal={onToggleModal} />
        </Modal>
      )}
    </>
  );
};

export default AddButton;
