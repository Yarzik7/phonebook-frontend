import { Oval } from 'react-loader-spinner';

const Loader = ({
  size = '7vw',
  strokeSize = 4,
  color = 'var(--accent-color)',
  secondaryColor = 'var(--accent-color)',
}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={strokeSize}
      strokeWidthSecondary={strokeSize}
    />
  );
};

export { Loader };
