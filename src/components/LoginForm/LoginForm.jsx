import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Email" type="email" name="email" />

      <Input label="Password" type="password" name="password" minLength="8" />
    </Form>
  );
};

export default LoginForm;
