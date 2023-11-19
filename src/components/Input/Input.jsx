import { useRef } from 'react';
import { nanoid } from 'nanoid';
import css from './Input.module.css';

const Input = ({
  handleChange,
  type = 'text',
  name = '',
  label = '',
  title = '',
  pattern = '',
  required = true,
  minLength = 0,
}) => {
  const inputId = useRef(nanoid());

  return (
    <>
      <label htmlFor={inputId.current} className={css.label}>
        {label}
      </label>
      <input
        id={inputId.current}
        className={css.input}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        onChange={handleChange}
        minLength={minLength}
      />
    </>
  );
};

export default Input;
