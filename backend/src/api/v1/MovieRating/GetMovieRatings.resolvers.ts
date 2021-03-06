import { Context } from 'graphql-yoga/dist/types';
import MovieRating from '../../../entity/MovieRating';
import { GetMovieRatingsQueryArgs } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Query: {
    GetMovieRatings: async (
      _: null | undefined,
      args: GetMovieRatingsQueryArgs,
      { req }: Context
    ) => {
      const { movieId, limit } = args;
      const { user } = req;
      const take = limit ? limit : 3;
      const movieRatings = await MovieRating.findAndCount({
        where: { movieId, userId: user.id },
        take,
        order: {
          watchDate: 'DESC'
        }
      });
      return {
        ok: true,
        error: null,
        movieRatings: movieRatings[0],
        movieRatingsCount: movieRatings[1]
      };
    }
  }
};

export default resolvers;
