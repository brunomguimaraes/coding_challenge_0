import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { white } = styleConstants;

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
  background: ${white};
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Modal;
