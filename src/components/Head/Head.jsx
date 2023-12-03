import css from './Head.module.css';

const Head = ({ headText, headType: HeadType = 'h1', cssClass }) => {
  return <HeadType className={cssClass ?? css.head}>{headText}</HeadType>;
};

export default Head;
