import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, forwardRef } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = forwardRef(({ children, onClose }, ref) => {
  useEffect(() => {
    const handleCloseByEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseByEsc);

    return () => window.removeEventListener('keydown', handleCloseByEsc);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div ref={ref} className={['modalOpen', css.backdrop].join(' ')} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot
  );
});

export default Modal;
