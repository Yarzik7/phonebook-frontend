import LoginForm from 'components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import css from 'components/App/App.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

const LoginPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    navigate("/contacts", {replace: true})
  }

  return (
    <>
      <h1 className={css.appTitle}>Log in</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
