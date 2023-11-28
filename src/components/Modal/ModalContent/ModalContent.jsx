import css from './ModalContent.module.css';
import CloseButton from 'components/CloseButton/CloseButton';

const ModalContent = ({ onClose, children }) => {
  return (
    <div className={css.modalContent}>
      <CloseButton onClick={onClose} />
      {children}
    </div>
  );
};

export default ModalContent;
