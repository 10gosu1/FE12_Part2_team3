import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  color: var(--white);
  font-weight: 700;
  line-height: 1.8033;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
