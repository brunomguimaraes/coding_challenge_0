import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  width: 80vw;

  @media (max-width: 750px) {
    width: 88vw;
  }

  @media (max-width: 425px) {
    width: 96vw;
  }
`;

export default Main;
