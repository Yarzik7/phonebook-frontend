import { NavLink } from 'react-router-dom';
import css from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <ul className={css.navigation__list}>
      <li>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/login">
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNavigation;