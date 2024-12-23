import React from 'react';
import styled from 'styled-components';

// Styled Components
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100; // 다른 요소 위에 오도록 z-index 추가
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

// Component
const ViewMoreModal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Message>크레딧이 부족합니다.</Message>
          <ConfirmButton onClick={onClose}>확인</ConfirmButton>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default ViewMoreModal;
