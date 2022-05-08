import styled from 'styled-components';
import XIcon from 'assets/images/XIcon.svg';
import TickIcon from 'assets/images/TickIcon.svg';

const Button = styled.button<{ isDecline?: boolean }>`
  border: none;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ isDecline }) => (isDecline ? XIcon : TickIcon)});
  background-size: ${({ isDecline }) => (isDecline ? '40%' : '75%')};
  background-repeat: no-repeat;
  background-position: center;
`;

export default Button;
