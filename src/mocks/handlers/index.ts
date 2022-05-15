import { rest, PathParams, DefaultRequestBody } from 'msw';
import { recommendations } from 'mocks/data';
import { Recommendation } from 'types';

export const handlers = [
  rest.get<
    DefaultRequestBody,
    PathParams,
    { recommendations: Recommendation[] }
  >('/tinder4movies/recommendations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ recommendations }));
  }),

  rest.put<
    DefaultRequestBody,
    PathParams,
    { rejectedRecommendation: Recommendation[] }
  >('/recommendations/:id/reject', (req, res, ctx) => {
    if (req.params.id) {
      const rejectedRecommendation = recommendations.filter(
        (recommendation: Recommendation) => recommendation.id === req.params.id
      );
      return res(ctx.status(200), ctx.json({ rejectedRecommendation }));
    }
  }),

  rest.put<
    DefaultRequestBody,
    PathParams,
    { acceptedRecommendation: Recommendation[] }
  >('/recommendations/:id/accept', (req, res, ctx) => {
    if (req.params.id) {
      const acceptedRecommendation = recommendations.filter(
        (recommendation: Recommendation) => recommendation.id === req.params.id
      );
      return res(ctx.status(200), ctx.json({ acceptedRecommendation }));
    }
  }),
];
