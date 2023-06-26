import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import css from './RegisterForm.module.css';
import { register } from 'Redux/auth/operations';

const RegisterForm = () => {
const dispatch = useDispatch();

  const nameInputId = useRef(nanoid());
  const emailInputId = useRef(nanoid());
  const passwordInputId = useRef(nanoid());

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={nameInputId.current} className={css.label}>Username</label>
      <input id={nameInputId.current} className={css.input} type="text" name="name" />

      <label htmlFor={emailInputId.current} className={css.label}>Email</label>
      <input id={emailInputId.current} className={css.input} type="email" name="email" />

      <label htmlFor={passwordInputId.current} className={css.label}>Password</label>
      <input id={passwordInputId.current} className={css.input} type="password" name="password" />

      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
