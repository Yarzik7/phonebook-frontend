import UserMenu from 'components/UserMenu';
import css from './SideBar.module.css';
import Navigation from 'components/Navigation';

const SideBar = ({ isLoggedIn }) => {
  return (
    <div className={css.sidebar}>
      <div className={css.userBar}>{isLoggedIn && <UserMenu />}</div>
      <Navigation />
    </div>
  );
};

export default SideBar;
