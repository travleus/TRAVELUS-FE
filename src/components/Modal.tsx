import GlobalPortal from '../GlobalPortal';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  return (
    <GlobalPortal>
      <ModalContainer>
        <ModalBox>{children}</ModalBox>
      </ModalContainer>
    </GlobalPortal>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const SlideIn = keyframes`
  from {
    bottom: -160px;
  }
  to {
    bottom: 0;
  }
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 160px;
  border-top: 1px solid #cfcfcf;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #fff;
  z-index: 1;
  padding: 15px 30px;
  animation: ${SlideIn} 1s forwards;

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }
`;
export default Modal;
