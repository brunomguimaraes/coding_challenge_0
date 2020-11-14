import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue, lightGray, green, black, spacer } = styleConstants;

export const TableBox = styled.div`
  margin: ${spacer} 0 ${spacer};
`;

export const Table = styled.table`
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  font-family: 'Roboto', sans-serif;
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

  @media (max-width: 750px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }

  @media (max-width: 300px) {
    font-size: 10px;
  }
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
