import { Wrapper, Heading } from './Home.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { data } from 'assets/data';

const Home = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <MovieCard key={data[0].id} movie={data[6]} />
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
