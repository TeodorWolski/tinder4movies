import { useContext } from 'react';
import { MovieContext } from 'providers/MovieProvider';
import { Heading, ButtonWrapper, Wrapper } from './Movie.styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'components/atoms/Button/Button';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { Recommendation } from 'types';

interface CtxInterface {
  currentMovie: Recommendation;
  downloadedMovies: Recommendation[];
  acceptMovie: () => void;
  rejectMovie: () => void;
}

const Movie = () => {
  const { currentMovie, downloadedMovies, acceptMovie, rejectMovie } =
    useContext<CtxInterface>(MovieContext);

  return (
    <Wrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Heading>Czy lubisz ten</Heading>
      {downloadedMovies.length > 0 && (
        <MovieCard
          id={currentMovie.id}
          name={currentMovie.name}
          description={currentMovie.description}
          image={currentMovie.image}
          url={currentMovie.url}
          rating={currentMovie.rating}
        />
      )}
      <ButtonWrapper>
        <Button onClick={acceptMovie} />
        <Button isDecline onClick={rejectMovie} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Movie;
