import { useEffect, useState } from 'react';
import { Wrapper, Heading, ButtonWrapper } from './Movie.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
import { MovieProps } from 'types';

interface Movie {
  id: string;
  name: string;
  rating: number;
  description: string;
  image: string;
  url: string;
}

const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = movies[currentIndex];

  const notify = (isAccepted?: boolean) => {
    if (isAccepted) {
      toast.success('Przyjęto rekomendację', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Odrzucono rekomendację!', {
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
      console.log('wyslano do bazy danych');
    } else {
      notify(false);
      axios.put(`/recommendations/${currentMovie.id}/reject`, currentMovie);
    }
  };

  return (
    <MainTemplate>
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
        {movies.length > 0 && <MovieCard movie={currentMovie} />}
        <ButtonWrapper>
          <Button onClick={() => handleChangeMovie(true)} />
          <Button isDecline onClick={() => handleChangeMovie(false)} />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Movie;
