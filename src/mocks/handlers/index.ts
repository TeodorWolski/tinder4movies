import { rest } from 'msw';
import { recommendations } from 'mocks/data';

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

  rest.put('/recommendations/:id/accept', (req, res, ctx) => {
    if (req.params.id) {
      const acceptedRecommendation = recommendations.filter(
        (recommendation) => recommendation.id === req.params.id
      );
      return res(ctx.status(200), ctx.json({ acceptedRecommendation }));
    }
  }),
];
