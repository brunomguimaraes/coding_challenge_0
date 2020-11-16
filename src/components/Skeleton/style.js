import styled, { keyframes } from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightGray, white } = styleConstants;

const loading = keyframes`
to {
  background-position: 100vw 0
}
`;

export const SkeletonRow = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${white};
  animation: ${loading} 2s infinite;

  &:nth-child(even) {
    background: linear-gradient(90deg, ${white}, ${lightGray}, ${white}) 0 0/ 100vh 100% fixed;
  }
`;

export default SkeletonRow;
