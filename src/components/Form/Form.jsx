import { useState } from 'react';
import css from './Form.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'Redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const Form = ({ buttonCaption, onSubmit, children }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const isLoading = useSelector(selectIsLoading);

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
        {isLoading && (
          <Loader
            size="30px"
            strokeSize={4}
            color="var(--primary-dark-color)"
            secondaryColor='"var(--primary-dark-color)"'
          />
        )}
      </button>
    </form>
  );
};

export default Form;
