import css from './NavList.module.css';

const NavList = ({ children }) => {
  return <ul className={css.navigation__list}>{children}</ul>;
};

export default NavList;
