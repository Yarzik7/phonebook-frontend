import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';
import SectionWithContainer from 'components/SectionWithContainer/SectionWithContainer';
import { NavLink } from 'react-router-dom';
import css from './AuthPagesContent.module.css';

const AuthPagesContent = ({ page }) => {
  const isLoginPage = page === 'Login';

  return (
    <SectionWithContainer headText={page} isHeadHas={false}>
      <h1 className="title">{page}</h1>
      <div className={css.formBox}>{isLoginPage ? <LoginForm /> : <RegisterForm />}</div>
      <p className={css.authOffer}>
        {isLoginPage ? "Don't have an account? " : 'Already have an account? '}
        <NavLink to={isLoginPage ? '/register' : '/login'} className={css.authOffer__navLink}>
          {isLoginPage ? 'SignUp' : 'Login'}
        </NavLink>
      </p>
    </SectionWithContainer>
  );
};

export default AuthPagesContent;
