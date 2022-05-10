import { rest } from 'msw';
import { recommendations } from 'mocks/data';
import { MovieProps } from 'types';

export const handlers = [
  rest.get('/recommendations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ recommendations }));
  }),

  rest.put('/recommendations/:id/reject', (req, res, ctx) => {
    if (req.params.id) {
      const rejectedRecommendation = recommendations.filter(
        (recommendation) => recommendation.id === req.params.id
      );
      return res(ctx.status(200), ctx.json({ rejectedRecommendation }));
    }
  }),
];
