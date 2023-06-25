import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import  SharedLayout from 'components/SharedLayout/SharedLayout'
import { useDispatch } from 'react-redux';
//import { selectIsRefreshing } from 'Redux/auth/selectors';
import { refreshUser } from 'Redux/auth/operations';
// import HomePage from 'pages/HomePage';
// import ContactsPage from 'pages/ContactsPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage'

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));


const App = () => {
  const dispatch = useDispatch();
  //const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="contacts" element={<ContactsPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export { App };
