import React, { Component } from "react";
import "../helpers/movie-card.css";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <Link className="card" to={`/detail/${movie._id}`}>

        <div className="card-image">
          <img src={movie.posterUrl} alt="" width="100%" />
          <div className="card-upper-bar">
    <span className="card-imdb">IMDB: {movie.imdb}</span>
    <span className="card-rotten">RT: {movie.rotten_tomatoes}%</span>
          </div>
          <div className="card-lower-bar">
    <span className="card-imdb">{movie.date.slice(0,4)}</span>
    <span className="card-rotten">{movie.age_rating}</span>
          </div>
        </div>
    <h3 className="card-header">{movie.name}</h3>
      </Link>
    );
  }
}
