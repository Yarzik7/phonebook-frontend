import css from './Confirm.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'Redux/contacts/operations';
// import { showNotify } from 'js/notifyFunc';

const confirmValues = {
  yes: true,
  no: false,
};

const Confirm = ({ contactName, contactId, onCloseModal, confirmed }) => {
  //   const dispatch = useDispatch();

  const handleConfirm = async ({ target: { name } }) => {
    if (confirmValues[name]) {
      await confirmed();
    }

    onCloseModal();
  };

  return (
    <div className={css.confirm}>
      <h3 className={css.confirm__head}>Confirm</h3>
      <p
        className={css.confirm__text}
      >{`Do you really want to delete the contact ${contactName}?`}</p>
      <div className={css.confirm__buttonBox} onClick={handleConfirm}>
        <button className={css.confirm__button} name="yes">
          Yes
        </button>
        <button className={css.confirm__button} name="no">
          No
        </button>
      </div>
    </div>
  );
};

export default Confirm;
