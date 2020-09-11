import React, { Component } from 'react'
import '../helpers/movie-detail.css'
import { connect } from 'react-redux'
import { getMovieDetail } from "../redux/actions/movie-detail-action";

class MovieDetail extends Component {
    componentDidMount() {
        this.props.onGetMovieDetail(this.props.match.params.id)

    }   
    render() {
        const movieDetail = this.props.movieDetail;
        return (
            <div className="movie-detail-container clearfix">
                <div className="movie-poster">
                    <img src= {movieDetail.posterUrl} alt=""/>
                </div>
                <div className="movie-detail">
        <h1 className="movie-name">{movieDetail.name}</h1>
                    <hr/>

        <p>{movieDetail.description}</p>
        <br/>
        <p className="movie-info"> <b>Director:</b> {movieDetail.director}</p>
                    <p className="movie-info"><b>Writer:</b> {movieDetail.writer}</p>
                    <p className="movie-info"><b>Length:</b> {movieDetail.length}</p>
                    <p className="movie-info"><b>Age Rating:</b> {movieDetail.age_rating}</p>
                    <p className="movie-info"><b>IMDB:</b> {movieDetail.imdb}</p>
                    <p className="movie-info"><b>Rotten Tomatoes:</b> {movieDetail.rotten_tomatoes}</p>
                    <p className="movie-info"><b>Categories: </b>{movieDetail.categories}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return { movieDetail: state.movieDetail };
  };
  
  const mapDispatchToProps = {
    onGetMovieDetail: getMovieDetail,
  };
  


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);