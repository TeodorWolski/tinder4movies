import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import { Wrapper, Heading, ButtonWrapper } from './Movie.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useParams } from 'react-router-dom';
import { recommendations as r } from 'mocks/data';
import { MovieProps } from 'types';
import MovieCard from 'components/organisms/MovieCard/MovieCard';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`/recommendations/1`)
      .then(({ data }) => console.log(data))
      .catch((error) => console.error(error));
  }, [id]);
  console.log(r);
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        {/* <MovieCard movie={recommendations[0]} key="1" /> */}
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Movie;
