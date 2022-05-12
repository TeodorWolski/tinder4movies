import { screen } from '@testing-library/react';
import { newRender } from 'helpers/newRender';
import Button from './Button';

describe('Is button connected to theme provider?', () => {
  it('renders the button', () => {
    newRender(<Button />);
  });
});

describe('Checks if the button is checking the isDecline prop', () => {
  it('checks if renders button with props', () => {
    const isDecline = true;
    newRender(<Button isDecline={isDecline}> Declined button </Button>);
    screen.getByText('Declined button');
  });
});
