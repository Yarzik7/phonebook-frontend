import css from './BurgerMenu.module.css';
import { FiMenu } from 'react-icons/fi';

const BurgerMenu = ({ onClick }) => {
  return (
    <button type="button" className={css.burgerMenuButton} onClick={onClick}>
      <FiMenu size={40} />
    </button>
  );
};

export default BurgerMenu;
