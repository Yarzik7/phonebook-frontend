import { forwardRef } from 'react';
import css from './ModalContent.module.css';
import CloseButton from 'components/CloseButton/CloseButton';

const ModalContent = forwardRef(({ onClose, children }, ref) => {
  return (
    <div
      ref={ref}
      className={css.modalContent}
    >
      <CloseButton onClick={onClose} />
      {children}
    </div>
  );
});

export default ModalContent;
