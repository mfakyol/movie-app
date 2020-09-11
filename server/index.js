const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const movieSchema = require("./movieSchema");

mongoose.connect(
  "mongodb+srv://movie_app_user:movie_app_user@cluster0.q5afk.mongodb.net/movie_database?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const upload = multer({ dest: "public/" });
const app = express();
const port = 3001;
const domain = `http://localhost:${port}`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

const Movie = mongoose.model("Movie", movieSchema);

app.get("/movie/:id", async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  res.send(movie);
});

app.post("/movie", upload.single("poster"), (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuidv4();
  const posterUrl = `${domain}/static/${newMovie._id}.jpg`;
  newMovie.posterUrl = posterUrl;
  const movie = new Movie(newMovie);

  movie
    .save()
    .then(() => {
      const posterUrl = `public/${movie._id}.jpg`;
      fs.rename(req.file.path, posterUrl, function (err) {
        if (err) res.send(err);
      });
    })
    .then(() => res.send(movie._id))
    .catch((err) => res.send(err));
});

app.get("/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.send(movies);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
