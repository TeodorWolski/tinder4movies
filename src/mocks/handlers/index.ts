import { rest } from 'msw';
import { recommendations } from 'mocks/data';
import { MovieProps } from 'types';

export const handlers = [
  rest.get('/recommendations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ recommendations }));
  }),
];
