import { NavLink } from 'react-router-dom';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <ul className={css.navigation__list}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>

      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </nav>
  );
};

export default Navigation;
