import { useShowModal } from './useShowModal';
import { getCssVariablesValue } from 'js';
import { useRef } from 'react';

export const useAnimatedShowModal = () => {
  const { showModal, toggleModal, setShowModal } = useShowModal();
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAnimatedModal = () => {
    if (showModal) {
      backdropRef.current?.classList.add('modalClose');
      contentRef.current?.classList.add('modalContentClose');
      const animationDuration = parseInt(getCssVariablesValue('--transition-duration'));
      setTimeout(toggleModal, animationDuration - animationDuration * 0.01);
      return;
    }

    toggleModal();
  };

  return { showModal, toggleAnimatedModal, setShowModal, backdropRef, contentRef };
};
