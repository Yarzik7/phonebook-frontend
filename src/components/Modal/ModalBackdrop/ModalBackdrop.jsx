import css from './ModalBackdrop.module.css';
import { useEffect, forwardRef } from 'react';

const ModalBackdrop = forwardRef(({ children, onClose, onAnimationEnd }, ref) => {
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

  return (
    <div
      ref={ref}
      className={css.backdrop}
      onClick={handleBackdropClick}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
});

export default ModalBackdrop;
