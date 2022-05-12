import { Heading, ButtonWrapper } from './Movie.styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'components/atoms/Button/Button';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { useMovie } from 'hooks/useMovie';

const Movie = () => {
  const { downloadedMovies, currentMovie, rejectMovie, acceptMovie } =
    useMovie();

  return (
    <>
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
    </>
  );
};

export default Movie;
