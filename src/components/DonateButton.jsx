import React from 'react';
import styled from 'styled-components';

const DonateButton = styled.button`
  padding: 10px 20px;
  z-index: 2;
  width: 234px;
  height: 40px;
  background: ${({ hasValue }) =>
    hasValue
      ? 'linear-gradient(90deg, var(--coralpink) 0%, var(--hotpink) 100%)'
      : 'var(--gray-200)'};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: ${({ hasValue }) => (hasValue ? 'pointer' : 'not-allowed')};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:hover {
    background: ${({ hasValue }) =>
      hasValue
        ? 'linear-gradient(90deg, var(--coralpink), var(--hotpink))'
        : 'var(--gray-200)'};
  }

  @media (max-width: 768px) {
    width: 234px;
    height: 40px;
    font-size: 13px;
    padding: 2px 16px;
  }

  @media (max-width: 480px) {
    width: 142px;
    height: 31px;
    font-size: 13px;
    padding: 2px 16px;
  }
`;

const Button = ({ label, onClick, hasValue }) => {
  return (
    <DonateButton hasValue={hasValue} onClick={onClick}>
      {label}
    </DonateButton>
  );
};

export default Button;

