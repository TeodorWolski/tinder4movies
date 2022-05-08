import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'views/Home/Home';
import { data } from 'mocks/data';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/recommendations/${data[0].id}`} replace />}
        />
        <Route path="/recommendations/:id" element={<Home movie={data[0]} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
