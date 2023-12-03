import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.loaderBox}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
