import UserMenu from 'components/UserMenu';
import css from './SideBar.module.css';
import Navigation from 'components/Navigation';
import { forwardRef } from 'react';

const SideBar = forwardRef(({ isLoggedIn }, ref) => {
  return (
    <div ref={ref} className={['modalContentOpen', css.sidebar].join(' ')}>
      <div className={css.userBar}>{isLoggedIn && <UserMenu />}</div>
      <Navigation />
    </div>
  );
});

export default SideBar;
