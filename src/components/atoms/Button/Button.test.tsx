import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import Button from './Button';

describe('Is button connected to theme provider?', () => {
  it('renders the button', () => {
    renderWithThemeProvider(<Button />);
  });
});

describe('Checks if the button is checking the isDecline prop', () => {
  it('checks if renders button with props', () => {
    const isDecline = true;
    renderWithThemeProvider(
      <Button isDecline={isDecline}> Declined button </Button>
    );
    screen.getByText('Declined button');
  });
});
