import css from './Message.module.css';

const Message = ({ message, children }) => {
  return <p className={css.message}>{message ?? children}</p>;
};

export default Message;
