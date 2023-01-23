import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots color="#ff0000" height={80} width={80} />
    </Wrapper>
  );
};
