import css from './Container.module.css';

const Container = ({ children }) => {
  return <div className={css.app}>{children}</div>;
};

export default Container;
