import UserMenu from 'components/UserMenu';
import css from './SideBar.module.css';
import Navigation from 'components/Navigation';
import CloseButton from 'components/CloseButton/CloseButton';
import { forwardRef } from 'react';

const SideBar = forwardRef(({ isLoggedIn, onClose }, ref) => {
  return (
    <aside ref={ref} className={['modalContentOpen', css.sidebar].join(' ')}>
      <CloseButton onClick={onClose} />
      <div className={css.userBar}>{isLoggedIn && <UserMenu />}</div>
      <Navigation />
    </aside>
  );
});

export default SideBar;
