import css from './Form.module.css';

const Form = ({ buttonCaption, onSubmit, children }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      {children}
      <button className={css.button} type="submit">
        {buttonCaption}
      </button>
    </form>
  );
};

export default Form;
