import LoginForm from 'components/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import css from 'components/App/App.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to='/contacts' replace />;
  }

  return (
    <>
      <h1 className={css.appTitle}>Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
