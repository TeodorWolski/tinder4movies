import { screen } from '@testing-library/react';
import { newRender } from 'helpers/newRender';
import Button from './Button';

describe('Button', () => {
  it('Is button connected to theme provider?', () => {
    newRender(<Button />);
  });

  it('checks if renders button with props', () => {
    const isDecline = true;
    newRender(<Button isDecline={isDecline}> Declined button </Button>);
    screen.getByText('Declined button');
  });
});
