import Button from 'components/atoms/Button/Button';
import { Wrapper, Heading, ButtonWrapper } from './Home.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { MovieProps } from 'types';

const Home: React.FC<MovieProps> = ({ movie }) => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <MovieCard key={movie.id} movie={movie} />
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
