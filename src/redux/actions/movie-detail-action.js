import { UPDATE_MOVIE_DETAIL } from "./types";
import Axios from "axios";

export function updateMovieDetail(movieDetail) {
  return {
    type: UPDATE_MOVIE_DETAIL,
    payload: {
      movieDetail,
    },
  };
}

export function getMovieDetail(id) {
  return (dispatch) => {
      
    Axios.get(`http://localhost:3001/movie/${id}`)
    .then(response =>  dispatch(updateMovieDetail(response.data)));
   ;
  };
}
