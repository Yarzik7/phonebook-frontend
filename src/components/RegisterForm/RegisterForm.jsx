import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import Input from 'components/Input/Input';
import Form from 'components/Form/Form';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form buttonCaption="Register" onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <Input label="Email" type="email" name="email" />

      <Input label="Password" type="password" name="password" minLength="8" />
    </Form>
  );
};

export default RegisterForm;
