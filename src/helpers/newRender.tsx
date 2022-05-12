import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import MovieProvider from 'providers/MovieProvider';
import { theme } from 'assets/styles/theme';

export const newRender = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path="/" element={children} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
