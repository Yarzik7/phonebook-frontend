import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from 'components/App/App.module.css'
import { selectIsLoggedIn } from 'Redux/auth/selectors';

const RegisterPage = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   if (isLoggedIn) {
     return <Navigate to="/contacts" replace />;
   }

  return (
    <>
      <h1 className={css.appTitle}>Register</h1>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
