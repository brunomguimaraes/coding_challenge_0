import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { lightBlue, lightGray, green, black } = styleConstants;

export const TableBox = styled.div`
  margin: 8px 0 8px;
  overflow-x: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: auto;
  white-space: nowrap;
  overflow: auto;
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
  text-transform: uppercase;
  text-align: left;
  padding: 8px;
  white-space: nowrap;
  font-weight: lighter;
  text-align: center;
  font-size: 10px;

  @media (max-width: 1024px) {
    ${(props) => props.sizeL && 'display: none'};
  }

  @media (max-width: 725px) {
    ${(props) => props.sizeM && 'display: none'};
  }

  @media (max-width: 414px) {
    ${(props) => props.sizeSm && 'display: none'};
  }
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

  &:nth-last-child(1) {
    padding-right: 16px;
    width: 16px;
  }

  @media (max-width: 1024px) {
    ${(props) => props.sizeL && 'display: none'};

    &:nth-child(1) {
      padding: 0 8px;
    }
  }

  @media (max-width: 725px) {
    ${(props) => props.sizeM && 'display: none'};
  }

  @media (max-width: 414px) {
    ${(props) => props.sizeSm && 'display: none'};
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const Button = styled.span`
  cursor: pointer;
`;

export default TableBox;
