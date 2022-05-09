import {
  CardWrapper,
  RatingSection,
  MovieInfo,
  FilmwebLink,
} from './MovieCard.styles';
import StarIcon from 'assets/images/StarIcon.svg';
import FilmwebIcon from 'assets/images/FilmwebIcon.png';
import { MovieProps } from 'types';

const MovieCard: React.FC<MovieProps> = ({
  id,
  rating,
  name,
  image,
  url,
  description,
}) => {
  return (
    <CardWrapper key={id}>
      <RatingSection>
        <img src={StarIcon} alt="starIcon" />
        <p>{rating}</p>
      </RatingSection>
      <img src={image} alt={`${name} photo`} />
      <MovieInfo>
        <div>
          <h1>{name}</h1>
          <FilmwebLink
            icon={FilmwebIcon}
            href={url}
            target="_blank"
            rel="noopener norefferer"
          />
        </div>
        <p>{description}</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default MovieCard;
