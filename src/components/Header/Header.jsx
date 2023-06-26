import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import css from 'components/Header/Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.header__container}>
          <Navigation />
        </div>
      </header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Header;
