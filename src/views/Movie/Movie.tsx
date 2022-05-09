import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import { Wrapper, Heading, ButtonWrapper } from './Movie.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useParams } from 'react-router-dom';
import { MovieProps } from 'types';
import MovieCard from 'components/organisms/MovieCard/MovieCard';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`/recommendations/${id}`)
      .then(({ data }) => setMovie(data.matchingRecommendation))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        {movie.map(({ id, rating, name, image, url, description }) => (
          <MovieCard
            key={id}
            rating={rating}
            name={name}
            image={image}
            description={description}
            url={url}
            id={id}
          />
        ))}
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Movie;
