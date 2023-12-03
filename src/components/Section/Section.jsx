import Head from 'components/Head/Head';
import css from './Section.module.css';

const Section = ({ isHeadHas = true, headText, headType = 'h2', cssHeadClass, children }) => {
  return (
    <section className={css.section}>
      {isHeadHas && <Head headText={headText} headType={headType} cssClass={cssHeadClass} />}
      {children}
    </section>
  );
};

export default Section;
