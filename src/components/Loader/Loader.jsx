import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={'7vw'}
      width={'7vw'}
      color="#f69c02"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f69c02"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export { Loader };
