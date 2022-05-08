import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
