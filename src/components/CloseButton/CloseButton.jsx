import css from './CloseButton.module.css';
import { RxCross2 } from 'react-icons/rx';

const CloseButton = ({ onClick }) => {
  return (
    <button className={css.closeButton} onClick={onClick}>
      <RxCross2 size={24} />
    </button>
  );
};

export default CloseButton;
