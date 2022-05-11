import { useEffect, useState } from 'react';
import { Heading, ButtonWrapper } from './Movie.styles';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { Recommendation } from 'types';

const Movie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Recommendation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = movies[currentIndex];

  const notify = (isAccepted?: boolean) => {
    if (isAccepted) {
      toast.success(`Już wiemy, że lubisz film ${currentMovie.name}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`Odrzucono rekomendację filmu ${currentMovie.name}!`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    axios
      .get(`/recommendations`)
      .then(({ data }) => setMovies(data.recommendations))
      .catch((error) => console.error(error));
  }, []);

  const handleChangeMovie = (isAccepted: boolean) => {
    setCurrentIndex(currentIndex + 1);
    if (isAccepted) {
      notify(true);
      axios.put(`/recommendations/${currentMovie.id}/accept`, currentMovie);
    } else {
      notify(false);
      axios.put(`/recommendations/${currentMovie.id}/reject`, currentMovie);
    }
    currentIndex === 6 && navigate('/end');
  };

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
      {movies.length > 0 && (
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
        <Button onClick={() => handleChangeMovie(true)} />
        <Button isDecline onClick={() => handleChangeMovie(false)} />
      </ButtonWrapper>
    </>
  );
};

export default Movie;
