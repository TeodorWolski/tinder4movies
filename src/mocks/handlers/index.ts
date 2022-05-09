import { rest } from 'msw';
import { recommendations } from 'mocks/data';
import { MovieProps } from 'types';

export const handlers = [
  rest.get<MovieProps>('/recommendations/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingRecommendation = recommendations.filter(
        (recommendation: MovieProps) => recommendation.id === req.params.id
      );
      return res(ctx.status(200), ctx.json({ matchingRecommendation }));
    }
    return res(ctx.status(200), ctx.json({ recommendations }));
  }),
];
