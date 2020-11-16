import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { purple, errorColor, white } = styleConstants;

export const Wrapper = styled.div`
  margin-bottom: 64px;
`;

export const Error = styled.div`
  background-color: ${errorColor};
  color: ${white};
  position: fixed;
  z-index: 1;
  width: 640px;
  left: 0;
  right: 0;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Header = styled.h1`
  color: ${purple};
`;

export default Wrapper;
