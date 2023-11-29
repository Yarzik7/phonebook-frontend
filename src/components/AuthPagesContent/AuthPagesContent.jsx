import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';
import Section from 'components/Section/Section';
import Container from 'components/Container';
import css from './AuthPagesContent.module.css';

const AuthPagesContent = ({ page }) => {
  return (
    <Section>
      <Container>
        <h1 className="title">{page}</h1>
        <div className={css.formBox}>{page === 'Login' ? <LoginForm /> : <RegisterForm />}</div>
      </Container>
    </Section>
  );
};

export default AuthPagesContent;
