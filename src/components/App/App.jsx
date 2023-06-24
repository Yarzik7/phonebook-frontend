import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import  SharedLayout from 'components/SharedLayout/SharedLayout'
// import HomePage from 'pages/HomePage';
// import ContactsPage from 'pages/ContactsPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage'

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));


const App = () => {
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
