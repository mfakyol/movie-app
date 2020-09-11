var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const domain = `http://localhost:${3001}`;

module.exports = movieSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    date: String,
    imdb: Number,
    director: String,
    writer: String,
    length: String,
    categories: Array,
    rotten_tomatoes: Number,
    age_rating: String,
    posterUrl: String
  });
