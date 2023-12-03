import css from './ModalBackdrop.module.css';
import { useEffect, forwardRef } from 'react';

const ModalBackdrop = forwardRef(({ children, onClose }, ref) => {
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
      className={['modalOpen', css.backdrop].join(' ')}
      onClick={handleBackdropClick}
      onAnimationEnd={onClose}
    >
      {children}
    </div>
  );
});

export default ModalBackdrop;
