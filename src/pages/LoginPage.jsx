import LoginForm from 'components/LoginForm/LoginForm';
import css from 'components/App/App.module.css';

const LoginPage = () => {
  return (
    <>
      <h1 className={css.appTitle}>Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
