import { useState } from 'react';
import axiosMock from 'axios';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { fireEvent, screen } from '@testing-library/react';
import MovieCard from 'components/organisms/MovieCard/MovieCard';
