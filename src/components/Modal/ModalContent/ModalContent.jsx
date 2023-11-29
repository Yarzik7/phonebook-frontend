import { useRef } from 'react';
import css from './ModalContent.module.css';
import CloseButton from 'components/CloseButton/CloseButton';

const ModalContent = ({ onClose, children }) => {
  const modalContentRef = useRef(null);

  return (
    <div ref={modalContentRef} className={css.modalContent}>
      <CloseButton onClick={onClose} />
      {children}
    </div>
  );
};

export default ModalContent;
