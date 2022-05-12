import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const newRender = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={children} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
