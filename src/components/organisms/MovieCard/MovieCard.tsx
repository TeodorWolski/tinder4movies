import {
  CardWrapper,
  RatingSection,
  MovieInfo,
  FilmwebLink,
} from './MovieCard.styles';
import StarIcon from 'assets/images/StarIcon.svg';
import FilmwebIcon from 'assets/images/FilmwebIcon.png';
import { MovieProps } from 'types';

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <CardWrapper key={movie.id}>
      <RatingSection>
        <img src={StarIcon} alt="starIcon" />
        <p>{movie.rating}</p>
      </RatingSection>
      <img src={movie.image} alt="movie" />
      <MovieInfo>
        <div>
          <h1>{movie.name}</h1>
          <FilmwebLink
            icon={FilmwebIcon}
            href={movie.url}
            target="_blank"
            rel="noopener norefferer"
          />
        </div>
        <p>{movie.description}</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default MovieCard;
