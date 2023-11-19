import Navigation from 'components/Navigation/Navigation';
import css from 'components/Header/Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
