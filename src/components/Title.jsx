import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  color: var(--white);
  font-weight: 700;
  line-height: 1.8033;
  @media (max-width: 1200px) {
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 1.3;
  }
  @media (max-width: 743px) {
    margin-bottom: 17px;
    font-size: 16px;
    line-height: 1.625;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
