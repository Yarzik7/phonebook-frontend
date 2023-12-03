import css from './Confirm.module.css';

const Confirm = ({ contactName, onConfirmed, onNotConfirmed }) => {
  return (
    <div className={css.confirm}>
      <h3 className={css.confirm__head}>Confirm</h3>
      <p
        className={css.confirm__text}
      >{`Do you really want to delete the contact ${contactName}?`}</p>
      <div className={css.confirm__buttonBox}>
        <button className={css.confirm__button} onClick={onConfirmed}>
          Yes
        </button>
        <button className={css.confirm__button} onClick={onNotConfirmed}>
          No
        </button>
      </div>
    </div>
  );
};

export default Confirm;
