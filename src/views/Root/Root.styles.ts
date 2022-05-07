import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Heading = styled.h1`
  &::after {
    content: ' movie!';
    color: ${({ theme }) => theme.colors.red};
  }
`;
