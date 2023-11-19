import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from 'components/App/App.module.css';

const RegisterPage = () => {
  return (
    <>
      <h1 className={css.appTitle}>Register</h1>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
