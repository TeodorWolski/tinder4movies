import styled from 'styled-components';

export const Heading = styled.h1`
  &::after {
    content: ' film?';
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 45rem;
  display: flex;
  width: 75%;
  margin-top: 10%;
  align-items: center;
  justify-content: space-around;
`;
