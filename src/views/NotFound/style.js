import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { purple } = styleConstants;

export const Wrapper = styled.div`
  width: 60vw;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    margin: 24px 0;
  }

  h1 {
    white-space: nowrap;
  }
`;

export const SvgWrapper = styled.div`
  width: 360px;
  height: 360px;
  padding: auto;
  @media (max-width: 425px) {
    width: 240px;
    height: 240px;
  }
`;

export const Header = styled.h1`
  color: ${purple};
`;

export default Wrapper;
