import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue, lightGray, green, black } = styleConstants;

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
`;

export const TableRow = styled.tr`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:nth-child(even) {
    background-color: ${lightBlue};
  }
`;

export const TableHeader = styled.th`
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
  border: 1px solid ${lightGray};
  text-align: left;
  padding: 8px;

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export default TableBox;
