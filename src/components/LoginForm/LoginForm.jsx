import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import css from './LoginForm.module.css';
import { logIn } from 'Redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailInputId = useRef(nanoid());
  const passwordInputId = useRef(nanoid());

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
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={emailInputId.current} className={css.label}>
        Email
      </label>
      <input
        id={emailInputId.current}
        className={css.input}
        type="email"
        name="email"
        required
      />

      <label htmlFor={passwordInputId.current} className={css.label}>
        Password
      </label>
      <input
        id={passwordInputId.current}
        className={css.input}
        type="password"
        name="password"
        minLength="8"
        required
      />

      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
