import { screen } from '@testing-library/react';
import { newRender } from 'helpers/newRender';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import Movie from './Movie';

const server = setupServer(...handlers);

describe('Movie', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders the component', () => {
    newRender(<Movie />);
  });

  // it('Checks if the movies are loaded', () => {
  //   expect(screen.getByText('gran torino')).toBeInTheDocument();
  // });
});
