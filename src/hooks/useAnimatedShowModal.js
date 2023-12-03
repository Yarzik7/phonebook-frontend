import { useShowModal } from './useShowModal';
import { useState } from 'react';
import { useRef } from 'react';

// const animationStates = {
//   PENDING: 'pending',
//   START: 'start',
//   END: 'end',
// };

export const useAnimatedShowModal = () => {
  const { showModal, toggleModal, setShowModal } = useShowModal();
  const [isAnimationOut, setIsAnimationOut] = useState(false);
  // const [animationStatus, setAnimationStatus] = useState(animationStates.PENDING);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAnimatedModal = e => {
    // console.log(e);

    if (!showModal && !isAnimationOut) {
      toggleModal();
      setIsAnimationOut(true);
      return;
    }

    // if (e?.animationName === 'modalClose') {
    //   console.log('end');
    // }

    // toggleModal();

    // console.log(e?.animationName);

    // if (!showModal && !isAnimationOut && animationStatus === animationStates.PENDING) {
    //   toggleModal();
    //   setAnimationStatus(animationStates.START);
    // }

    // if (showModal && !isAnimationOut && animationStatus === animationStates.START) {
    //   setAnimationStatus(animationStates.END);
    // }

    // if (showModal && !isAnimationOut && animationStatus === animationStates.END) {
    //   backdropRef.current?.classList.add('modalClose');
    //   contentRef.current?.classList.add('modalContentClose');
    //   setAnimationStatus(animationStates.START);
    //   setIsAnimationOut(true);
    // }

    // if (showModal && isAnimationOut && animationStatus === animationStates.START) {
    //   toggleModal();
    //   setAnimationStatus(animationStates.PENDING);
    //   setIsAnimationOut(false);
    // }
  };

  return { showModal, toggleAnimatedModal, setShowModal, backdropRef, contentRef };
};
