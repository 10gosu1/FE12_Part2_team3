// DonateButton.jsx
import React from 'react';
import styled from 'styled-components';

// Styled-components for button styling
const DonateButton = styled.button`
  padding: 10px 20px;
  position: relative;
  top: 20px;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%); /* 버튼을 중앙에 위치시킴 */
  width: 234px;
  height: 40px;
  background: linear-gradient(90deg, var(--coralpink) 0%, var(--hotpink) 100%);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(90deg, var(--coralpink), var(--hotpink));
  }
`;

const Button = ({ label, onClick }) => {
  return (
    <DonateButton onClick={onClick}>
      {label}  
    </DonateButton>
  );
};

export default Button;
