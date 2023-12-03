import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'Redux/auth/operations';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(
      logIn({
        email,
        password,
      })
    );

    reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form buttonCaption="Login" onSubmit={handleSubmit}>
      <Input label="Email" type="email" name="email" onChange={handleChange} />

      <Input
        label="Password"
        type="password"
        name="password"
        minLength="8"
        onChange={handleChange}
      />
    </Form>
  );
};

export default LoginForm;
