// DonateButton.jsx
import React from 'react';
import styled from 'styled-components';

// Styled-components for button styling
const DonateButton = styled.button`
  padding: 10px 20px;
  position: relative;
  top: 20px;
  left: 40%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 234px;
  height: 40px;
  background: linear-gradient(90deg, #ff7f7f 0%, #ff4d4d 100%);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(90deg, #ff8f8f, #ff5d5d);
  }
`;

const Button1 = ({ label, onClick }) => {
  return <DonateButton onClick={onClick}>{label}</DonateButton>;
};

export default Button1;
