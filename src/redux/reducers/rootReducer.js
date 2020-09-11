import { combineReducers } from "redux";
import example from "./exampleReducer";
import movieDetail from "./movieDetailReducer";
import movies from "./moviesReducer";

export default combineReducers({
  example,
  movieDetail,movies
});
