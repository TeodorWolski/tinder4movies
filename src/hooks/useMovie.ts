import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Recommendation } from 'types';
import axios from 'axios';

export const useMovie = () => {
  const [downloadedMovies, setDownloadedMovies] = useState<Recommendation[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = downloadedMovies[currentIndex];
  const navigate = useNavigate();

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
      .then(({ data }) => setDownloadedMovies(data.recommendations))
      .catch((error) => console.error(error));
  }, []);

  const rejectMovie = () => {
    setCurrentIndex(currentIndex + 1);
    notify(false);
    axios.put(`/recommendations/${currentMovie.id}/reject`, currentMovie);
    currentIndex === 6 && navigate('/end');
  };

  const acceptMovie = () => {
    setCurrentIndex(currentIndex + 1);
    notify(true);
    axios.put(`/recommendations/${currentMovie.id}/accept`, currentMovie);
    currentIndex === 6 && navigate('/end');
  };

  return {
    downloadedMovies,
    currentMovie,
    rejectMovie,
    acceptMovie,
  };
};
