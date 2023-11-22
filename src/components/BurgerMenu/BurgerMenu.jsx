import css from './BurgerMenu.module.css';
import { FiMenu } from 'react-icons/fi';

const BurgerMenu = () => {
  return (
    <button type="button" className={css.burgerMenuButton}>
      <FiMenu />
    </button>
  );
};

export default BurgerMenu;
