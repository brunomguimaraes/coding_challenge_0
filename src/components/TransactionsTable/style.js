import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue, lightGray, green, black, darkGray, white } = styleConstants;

export const TableBox = styled.div`
  margin: 8px 0 8px;
  overflow-x: auto;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  padding-bottom: 160px;
`;

export const Table = styled.table`
  opacity: ${(props) => (props.isLoading ? '0.2' : '1')};
  border-collapse: collapse;
  margin: auto;
  white-space: nowrap;
  width: 100%;
`;

export const TableRow = styled.tr`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:nth-child(even) {
    background-color: ${lightBlue};
  }
`;

export const TableHeader = styled.th`
  border-bottom: 1px solid ${darkGray};
  text-transform: uppercase;
  text-align: left;
  padding: 8px;
  white-space: nowrap;
  font-weight: lighter;
  text-align: center;
  font-size: 10px;
`;

export const TableCell = styled.td`
  color: ${(props) => (props.isCurrency ? green : black)};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  border-bottom: 1px solid ${lightGray};
  text-align: center;
  padding: 8px 16px 8px 16px;

  &:nth-child(1) {
    padding: 0 16px;
  }

  @media (max-width: 1024px) {
    &:nth-child(1) {
      padding: 0 8px;
    }
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const Skeleton = styled.div`
  margin: auto;
  height: 400px;
  opacity: 0.7;
  width: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(${white} 40px, transparent 0),
    linear-gradient(${lightGray} 80px, transparent 0),
    linear-gradient(${white} 120px, transparent 0),
    linear-gradient(${lightGray} 160px, transparent 0),
    linear-gradient(${white} 200px, transparent 0),
    linear-gradient(${lightGray} 240px, transparent 0),
    linear-gradient(${white} 280px, transparent 0),
    linear-gradient(${lightGray} 320px, transparent 0),
    linear-gradient(${white} 360px, transparent 0),
    linear-gradient(${lightGray} 480px, transparent 0),
    linear-gradient(${white} 100%, transparent 0);
`;

export default TableBox;
