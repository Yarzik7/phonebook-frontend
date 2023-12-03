import { useShowModal } from './useShowModal';
import { useRef } from 'react';

export const useAnimatedShowModal = () => {
  const { showModal, toggleModal, setShowModal } = useShowModal();
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAnimatedModal = () => {
    if (showModal) {
      backdropRef.current?.classList.add('modalClose');
      contentRef.current?.classList.add('modalContentClose');
      setTimeout(toggleModal, 4950);
      return;
    }

    toggleModal();
  };

  return { showModal, toggleAnimatedModal, setShowModal, backdropRef, contentRef };
};
