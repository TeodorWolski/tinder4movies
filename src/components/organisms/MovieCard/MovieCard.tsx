import styled from 'styled-components';
import StarIcon from 'assets/images/StarIcon.svg';
import FilmwebIcon from 'assets/images/FilmwebIcon.png';
import { data } from 'assets/data';

const CardWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  height: 45rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  width: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }
`;

const RatingSection = styled.div`
  position: absolute;
  top: 0;
  height: 3.5rem;
  width: 14rem;
  border-radius: 0.5rem 0.5rem 9.8rem 9.8rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding-left: 1.75rem;
    height: 65%;
    width: 65%;
  }

  p {
    padding-right: 5rem;
    color: #f8b84e;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const MovieInfo = styled.div`
  border-top: 3px solid ${({ theme }) => theme.colors.red};
  bottom: 0;
  position: absolute;
  z-index: 999999999;
  background-color: white;
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(15%);
  }

  p {
    height: 5rem;
    font-size: 1.1rem;
    width: 85%;
    transform: translateY(-17.5%);
    margin-bottom: 2rem;
  }
`;

const FilmwebLink = styled.a<{ icon: string }>`
  margin-left: 2rem;
  height: 2.75rem;
  width: 2.75rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
`;

interface Props {
  movie: {
    id: string;
    name: string;
    rating: number;
    description: string;
    image: string;
    url: string;
  };
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <CardWrapper>
      <RatingSection>
        <img src={StarIcon} alt="starIcon" />
        <p>{movie.rating}</p>
      </RatingSection>
      <img src={movie.image} alt="" />
      <MovieInfo>
        <div>
          <h1>{movie.name}</h1>
          <FilmwebLink
            icon={FilmwebIcon}
            href="https://www.filmweb.pl/film/Ch%C5%82opaki+nie+p%C5%82acz%C4%85-2000-843"
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
