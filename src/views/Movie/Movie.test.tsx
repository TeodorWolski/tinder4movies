import { newRender } from 'helpers/newRender';
import { useState } from 'react';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { fireEvent, screen } from '@testing-library/react';
import Movie from './Movie';

const server = setupServer(...handlers);

describe('Movie', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders the component', () => {
    newRender(<Movie />);
  });
});
