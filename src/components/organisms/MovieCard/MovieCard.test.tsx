import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import MovieCard from './MovieCard';

const mockMovie = {
  id: 'asd12324342casd1',
  name: 'Gran torino',
  rating: 8.2,
  description:
    'Walt Kowalski to emerytowany weteran żyjący we własnym poukładanym świecie. Jego spokój zostaje zburzony przez nowych sąsiadów z Azji, których syn spróbuje ukraść mu ulubione auto.',
  url: 'https://www.filmweb.pl/film/Gran+Torino-2008-476580',
  image: 'https://fwcdn.pl/fpo/65/80/476580/7239651.3.jpg',
};

describe('MovieCard', () => {
  it('checks if MovieCard is displaying props value', () => {
    renderWithThemeProvider(
      <MovieCard
        id={mockMovie.id}
        name={mockMovie.name}
        description={mockMovie.description}
        image={mockMovie.image}
        url={mockMovie.url}
        rating={mockMovie.rating}
      />
    );
    screen.getByText(/Gran torino/);
    screen.getByText(/8.2/);
  });
});
