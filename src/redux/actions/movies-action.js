import { UPDATE_MOVIES } from ".//types";
import Axios from "axios";

export function updateMovies(movies) {
  return {
    type: UPDATE_MOVIES,
    payload: {
      movies,
    },
  };
}

export function getMovies() {
  return (dispatch) => {
    console.log('asd')
    Axios.get(`http://localhost:3001/movies`)
    .then(response =>  dispatch(updateMovies(response.data)));
   ;
  };
}

