import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from 'views/Movie/Movie';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
