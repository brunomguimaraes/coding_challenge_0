import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue, lightGray, green, black, spacer } = styleConstants;

export const TableBox = styled.div`
  margin: ${spacer} 0 ${spacer};
`;

export const Table = styled.table`
  opacity: ${(props) => (props.isLoading ? '0.2' : '1')};
  border-collapse: collapse;
  margin: auto;
  overflow-x: auto;
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
  padding: ${spacer};
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
  padding: ${spacer};

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export default TableBox;
