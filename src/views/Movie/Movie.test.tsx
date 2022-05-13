import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import { recommendations } from 'mocks/data';
import { rest } from 'msw';
import MovieProvider from 'providers/MovieProvider';
import { newRender } from 'helpers/newRender';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import Movie from './Movie';

const mockMovie = {
  id: 'asd12324342casd1',
  name: 'Gran torino',
  rating: 8.2,
  description:
    'Walt Kowalski to emerytowany weteran żyjący we własnym poukładanym świecie. Jego spokój zostaje zburzony przez nowych sąsiadów z Azji, których syn spróbuje ukraść mu ulubione auto.',
  url: 'https://www.filmweb.pl/film/Gran+Torino-2008-476580',
  image: 'https://fwcdn.pl/fpo/65/80/476580/7239651.3.jpg',
};

const server = setupServer(...handlers);

const App = () => (
  <MovieProvider>
    <Movie />
  </MovieProvider>
);

describe('Movie', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('downloads the data from recommendations and renders app', async () => {
    newRender(<App />);
    server.use(
      rest.get('/recommendations', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ recommendations }));
      })
    );
    expect(screen.getByText('Czy lubisz ten')).toBeInTheDocument();
  });

  it('Checks if reject put request works', async () => {
    server.use(
      rest.put('/recommendation/:id/reject', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ mockMovie }));
      })
    );
    newRender(<App />);
    const button = screen.queryByTestId('reject-movie');
    expect(button).toBeInTheDocument();
  });

  it('Checks if accept put request works', async () => {
    server.use(
      rest.put('/recommendation/:id/accept', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ mockMovie }));
      })
    );
    newRender(<App />);
    const button = screen.queryByTestId('accept-movie');
    expect(button).toBeInTheDocument();
  });
});
