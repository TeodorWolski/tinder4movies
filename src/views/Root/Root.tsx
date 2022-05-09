import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Movie from 'views/Movie/Movie';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movie/:id" />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
