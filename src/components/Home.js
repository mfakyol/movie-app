import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getMovies } from "../redux/actions/movies-action";

class Home extends Component {
  componentDidMount() {
      this.props.ongetMovies();
  }

  render() {
      const movies = this.props.movies;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        <p>{movies.toString()}</p>
          {
              movies.map( movie => (<MovieCard key={movie._id} movie={movie} />))
          }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { movies: state.movies };
};

const mapDispatchToProps = {
  ongetMovies: getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
