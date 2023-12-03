import { useState } from 'react';
import css from './Form.module.css';

const Form = ({ buttonCaption, onSubmit, children }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();
    setIsDisabledButton(true);
    await onSubmit();
    setIsDisabledButton(false);
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      {children}
      <button disabled={isDisabledButton} className={css.button} type="submit">
        {buttonCaption}
      </button>
    </form>
  );
};

export default Form;
