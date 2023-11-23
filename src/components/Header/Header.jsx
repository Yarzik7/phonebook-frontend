import Navigation from 'components/Navigation/Navigation';
import css from 'components/Header/Header.module.css';
import { useState, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import UserMenu from 'components/UserMenu';
import Modal from 'components/Modal/Modal';
import SideBar from 'components/SideBar/SideBar';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const isMediumScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);

  useEffect(() => {
    isMediumScreen && setShowModal(false);
  }, [isMediumScreen]);

  return (
    <header className={css.header}>
      <div className={css.header__container}>
        {isMediumScreen ? <Navigation /> : <BurgerMenu onClick={toggleModal} />}
        {isMediumScreen && isLoggedIn && <UserMenu />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <SideBar isLoggedIn={isLoggedIn} isMediumScreen={isMediumScreen} />
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
