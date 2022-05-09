import { rest } from 'msw';
import { data } from 'mocks/data';
import { MovieProps } from 'types';

export const handlers = [
  rest.get<MovieProps>('/recommendations', (req, res, ctx) => {
    res(ctx.status(200), ctx.json({ data }));
  }),
];
