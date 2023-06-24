import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Navigation />
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
