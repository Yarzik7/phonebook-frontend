import { useShowModal } from './useShowModal';
import { useRef } from 'react';

export const useAnimatedShowModal = () => {
  const { showModal, toggleModal, setShowModal } = useShowModal();
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAnimatedModal = (
    animatedDuration,
    backdropCloseAnimatedClass,
    modalContentCloseAnimatedClass
  ) => {
    if (showModal) {
      backdropRef.current?.classList.add(backdropCloseAnimatedClass ?? 'modalClose');
      contentRef.current?.classList.add(modalContentCloseAnimatedClass ?? 'modalContentClose');
      setTimeout(toggleModal, (animatedDuration ?? 300));
      return;
    }

    toggleModal();
  };

  return { showModal, toggleAnimatedModal, setShowModal, backdropRef, contentRef };
};
