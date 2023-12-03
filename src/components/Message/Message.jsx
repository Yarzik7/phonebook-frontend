import css from './Message.module.css';

const Message = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

export default Message;
