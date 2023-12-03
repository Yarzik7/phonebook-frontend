import Section from 'components/Section/Section';
import Container from 'components/Container';
import Head from 'components/Head/Head';

const SectionWithContainer = ({
  isHeadHas = true,
  headText,
  headType = 'h2',
  cssHeadClass,
  children,
}) => {
  return (
    <Section isHeadHas={false}>
      <Container>
        {isHeadHas && <Head headText={headText} headType={headType} cssClass={cssHeadClass} />}
        {children}
      </Container>
    </Section>
  );
};

export default SectionWithContainer;
