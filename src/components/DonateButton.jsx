import React from 'react';
import styled from 'styled-components';

const DonateButton = styled.button`
  all: unset;
  display: block; 
  width: 100%; 
  padding: 10px 20px;
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
  text-align: center;

  &:hover {
    background: ${({ hasValue }) =>
      hasValue
        ? 'linear-gradient(90deg, var(--coralpink), var(--hotpink))'
        : 'var(--gray-200)'};
  }

  @media (max-width: 744px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 375px) {
    padding: 6px 12px;
    font-size: 13px;
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

