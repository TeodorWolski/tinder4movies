import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 1.5rem;
    color: black;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 1rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 20rem;
  color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;
