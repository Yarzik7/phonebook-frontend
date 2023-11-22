import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import ContentNavigation from 'components/ContentNavigation/ContentNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Modal from 'components/Modal/Modal';
import SideBar from 'components/SideBar/SideBar';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isMediumScreen = useMediaQuery({ query: '(min-width: 640px)' });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(showModal => !showModal);

  return (
    <nav className={css.navigation}>
      {isMediumScreen ? (
        <ContentNavigation isLoggedIn={isLoggedIn} />
      ) : (
        <BurgerMenu onClick={toggleModal} />
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <SideBar />
        </Modal>
      )}
    </nav>
  );
};

export default Navigation;
