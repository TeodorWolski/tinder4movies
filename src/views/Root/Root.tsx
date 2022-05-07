import { Wrapper, Heading } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { data } from 'assets/data';

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
