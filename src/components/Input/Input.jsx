import { useRef } from 'react';
import { nanoid } from 'nanoid';
import css from './Input.module.css';

const Input = ({
  onChange,
  type = 'text',
  name = '',
  label,
  title,
  pattern,
  required = true,
  minLength,
  value,
}) => {
  const inputId = useRef(nanoid());

  return (
    <>
      {label && (
        <label htmlFor={inputId.current} className={css.label}>
          {label}
        </label>
      )}
      <input
        id={inputId.current}
        className={css.input}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={onChange}
        minLength={minLength}
      />
    </>
  );
};

export default Input;
