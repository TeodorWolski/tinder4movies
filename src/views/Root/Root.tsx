import { Wrapper, Heading } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { data } from 'assets/data';

interface MovieProps {
  id: string;
  name: string;
  rating: number;
  description: string;
  image: string;
  url: string;
}

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        {data.map((movie: MovieProps) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
