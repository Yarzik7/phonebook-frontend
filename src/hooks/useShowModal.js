const { useState } = require('react');

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return { showModal, toggleModal, setShowModal };
};
