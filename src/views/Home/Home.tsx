import Button from 'components/atoms/Button/Button';
import { Wrapper, Heading, ButtonWrapper } from './Home.styles';
import { data } from 'assets/data';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';

const Home = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <MovieCard key={data[0].id} movie={data[6]} />
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
