import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p
        className={css.copyright}
      >{`Copyright © ${new Date().getFullYear()} | Yaroslav Chaplinskyi`}</p>
    </footer>
  );
};

export default Footer;
