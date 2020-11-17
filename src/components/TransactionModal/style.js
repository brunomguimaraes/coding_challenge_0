import styled, { createGlobalStyle } from 'styled-components';
import styleConstants from 'utils/constants/style';

const { white, darkGray, purple } = styleConstants;

export const ScrollBodyLock = createGlobalStyle`
  body, html {
    ${(props) => props.showModal && 'overflow: hidden'};
  }
`;

export const Modal = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalSection = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: ${white};
  border-radius: 16px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 475px) {
    width: 70%;
  }
`;

export const ModalList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin: 16px 24px;
`;

export const ModalListItem = styled.li`
  color: ${darkGray};
  margin-bottom: 8px;
  font-weight: bold;

  & > span {
    color: ${purple};
    font-weight: normal;
  }
`;

export const ModalButton = styled.span`
  cursor: pointer;
  align-self: flex-end;
  width: 12px;
  height: 12px;
  padding-right: 16px;
  margin-top: 16px;
`;

export default Modal;
