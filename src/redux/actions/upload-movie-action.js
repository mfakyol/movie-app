import Axios from "axios";

export  function uploadMovie(movie) {
    
  return Axios.post("http://localhost:3001/movie", movie)
    .then((response) => response)
}
