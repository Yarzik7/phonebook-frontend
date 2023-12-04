import { useState, useRef } from 'react';

export const useShowModalWithCloseAnimation = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAnimationOut, setIsAnimationOut] = useState(false);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);
  const afterCloseAnimationHandler = useRef(() => {});

  const setAfterCloseAnimationHandler = callback => {
    afterCloseAnimationHandler.current = callback;
  };

  const onToggleModal = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setIsAnimationOut(true);
    }
  };

  const onAnimationEnd = e => {
    if (e.animationName === 'modalClose') {
      backdropRef.current.style.display = 'none';
      setShowModal(false);
      setIsAnimationOut(false);
      afterCloseAnimationHandler.current();
      setAfterCloseAnimationHandler(() => {});
    }
  };

  if (isAnimationOut) {
    backdropRef.current?.classList.add('modalClose');
    contentRef.current?.classList.add('modalContentClose');
  }

  return {
    showModal,
    onAnimationEnd,
    backdropRef,
    contentRef,
    setShowModal,
    onToggleModal,
    setAfterCloseAnimationHandler,
  };
};
