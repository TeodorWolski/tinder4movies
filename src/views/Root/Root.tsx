import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieProvider from 'providers/MovieProvider';
import Movie from 'views/Movie/Movie';
import End from 'views/End/End';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter basename="/tinder4movies">
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
