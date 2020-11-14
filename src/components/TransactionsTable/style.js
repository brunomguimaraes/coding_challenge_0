import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue } = styleConstants;

export const TableBox = styled.div`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  &:nth-child(even) {
    background-color: ${lightBlue};
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export default TableBox;
