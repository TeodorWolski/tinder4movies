import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Recommendation } from 'types';
import { MovieCtx } from 'types';
import axios from 'axios';

export const MovieContext = createContext<MovieCtx>({
  acceptMovie: () => {
    console.log('acceptMovie');
  },
  rejectMovie: () => {
    console.log('rejectMovie');
  },
  downloadedMovies: [],
  currentMovie: {
    name: '',
    id: '',
    description: '',
    rating: 0,
    url: '',
    image: '',
    swipe: 0,
  },
  handleTouchEnd: () => {
    console.log('handleTouchEnd');
  },
  swipe: 0,
});

const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [downloadedMovies, setDownloadedMovies] = useState<Recommendation[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentMovie = downloadedMovies[currentIndex];
  const navigate = useNavigate();
  const [swipe, setSwipe] = useState(0);

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
      .get<{ recommendations: Recommendation[] }>(`/recommendations`)
      .then(({ data }) => setDownloadedMovies(data.recommendations))
      .catch((error) => console.error(error));
  }, []);

  const rejectMovie = () => {
    setCurrentIndex(currentIndex + 1);
    notify(false);
    axios.put<Recommendation>(
      `/recommendations/${currentMovie.id}/reject`,
      currentMovie
    );
    currentIndex === 6 && navigate('/end');
  };

  const acceptMovie = () => {
    setCurrentIndex(currentIndex + 1);
    notify(true);
    axios.put<Recommendation>(
      `/recommendations/${currentMovie.id}/accept`,
      currentMovie
    );
    currentIndex === 6 && navigate('/end');
  };

  const handleTouchEnd = () => {
    setSwipe(-150);
    setCurrentIndex(currentIndex + 1);
    setSwipe(0);
    rejectMovie();
  };

  return (
    <MovieContext.Provider
      value={{
        acceptMovie,
        rejectMovie,
        downloadedMovies,
        currentMovie,
        handleTouchEnd,
        swipe,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
