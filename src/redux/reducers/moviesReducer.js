import { UPDATE_MOVIES } from "../actions/types";

export default function exampleReducer(state = [], action) {
    switch (action.type) {
      case UPDATE_MOVIES:
        return action.payload.movies;
      default:
        return state;
    }
  }