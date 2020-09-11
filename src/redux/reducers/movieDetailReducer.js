import { UPDATE_MOVIE_DETAIL } from "../actions/types";

export default function exampleReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_MOVIE_DETAIL:
      return action.payload.movieDetail;
    default:
      return state;
  }
}
