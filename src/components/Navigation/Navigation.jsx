import { NavLink } from 'react-router-dom';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import css from './Navigation.module.css'


const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)
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
