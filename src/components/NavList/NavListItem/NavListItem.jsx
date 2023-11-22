import { NavLink } from 'react-router-dom';
import css from './NavListItem.module.css';

const NavListItem = ({ caption, to }) => {
  return (
    <li className={css.link}>
      <NavLink className={css.link} to={to}>
        {caption}
      </NavLink>
    </li>
  );
};

export default NavListItem;
