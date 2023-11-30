const { useState, useRef } = require('react');

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  const toggleModal = () => {
    if (showModal) {
      backdropRef.current?.classList.add('modalClose');
      contentRef.current?.classList.add('modalContentClose');
      setTimeout(() => setShowModal(!showModal), 250);
      return;
    }

    setShowModal(!showModal);
  };

  return { showModal, toggleModal, setShowModal, backdropRef, contentRef };
};
