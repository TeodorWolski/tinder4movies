import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import { Wrapper, Heading, ButtonWrapper } from './Home.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { MovieProps } from 'types';
import MovieCard from 'components/organisms/MovieCard/MovieCard';

const Home = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get('/recommendations')
      .then(({ data }) => setRecommendations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
