import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'Redux/auth/operations';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(
      register({
        name,
        email,
        password,
      })
    );
    
    reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form buttonCaption="Register" onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      />

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

export default RegisterForm;
