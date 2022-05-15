import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieProvider from 'providers/MovieProvider';
import Movie from 'views/Movie/Movie';
import End from 'views/End/End';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/tinder4movies/" />} />
            <Route path="/tinder4movies" element={<Movie />} />
            <Route path="/tinder4movies/end" element={<End />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
