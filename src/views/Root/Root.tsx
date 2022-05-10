import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from 'views/Movie/Movie';
import End from 'views/End/End';
const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route path="/end" element={<End />} />
          <Route path="/" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
