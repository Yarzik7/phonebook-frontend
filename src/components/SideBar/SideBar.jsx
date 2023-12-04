import UserMenu from 'components/UserMenu';
import css from './SideBar.module.css';
import Navigation from 'components/Navigation';
import CloseButton from 'components/CloseButton/CloseButton';
import { forwardRef } from 'react';

const SideBar = forwardRef(({ isLoggedIn, onClose }, ref) => {
  const handleCloseByNavLinkClick = ({ target: { tagName } }) => {
    tagName === 'A' && onClose();
  };

  return (
    <aside ref={ref} className={css.sidebar}>
      <CloseButton onClick={onClose} />
      <div className={css.userBar}>{isLoggedIn && <UserMenu />}</div>
      <Navigation closeSideBar={handleCloseByNavLinkClick} />
    </aside>
  );
});

export default SideBar;
