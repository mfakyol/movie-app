import React, { Component } from "react";
import "../helpers/upload-movie.css";
import { uploadMovie } from "../redux/actions/upload-movie-action";

class UploadMovie extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeCheckboxes = this.onChangeCheckboxes.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
  }

  state = {
    name: "",
    description: "",
    date: "",
    imdb: 0,
    director: "",
    writer: "",
    length: "",
    rotten_tomatoes: 0,
    age_rating: "",
    poster: {},
    filePath: "",
    categories: [],
    allCategories: [
      "action",
      "drama",
      "comedy",
      "crime",
      "horor",
      "romance",
      "mystery",
      "triller",
      "western",
    ],
    filteredCategories: [
      "action",
      "drama",
      "comedy",
      "crime",
      "horor",
      "romance",
      "mystery",
      "triller",
      "western",
    ],
  };
 async submit(e) {
    e.preventDefault();
    const {
      name,
      description,
      date,
      imdb,
      director,
      writer,
      length,
      rotten_tomatoes,
      age_rating,
      poster,
      categories,
    } = this.state;
    const formData = new FormData();
    formData.append("name", name)
    formData.append("description", description)
    formData.append("date", date)
    formData.append("imdb", imdb)
    formData.append("director", director)
    formData.append("writer", writer)
    formData.append("length", length)
    formData.append("poster", poster)
    formData.append("rotten_tomatoes", rotten_tomatoes)
    formData.append("age_rating", age_rating)
    categories.forEach(category => formData.append("categories[]", category))

     const response = await uploadMovie(formData);
    console.log(response)
     this.props.history.push(`/detail/${response.data}`)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  } 

  onChangeFile(e) {
    this.setState({
      poster: e.target.files[0],
      filePath: URL.createObjectURL(e.target.files[0]),
    });
  }

  onChangeCheckboxes(e) {
    if (e.target.type === "checkbox") {
      const categories = this.state.categories;
      if (e.target.checked) {
        this.setState({
          categories: [...categories, e.target.value],
        });
      } else {
        this.setState({
          categories: categories.filter(
            (category) => category !== e.target.value
          ),
        });
      }
    }
  }

  filterCategories(e) {
    const filteredCategories = this.state.allCategories.filter((category) =>
      category.includes(e.target.value)
    );
    this.setState({
      filteredCategories,
    });
  }

  render() {
    const {
      name,
      description,
      date,
      imdb,
      rotten_tomatoes,
      age_rating,
      categories,
      director,
      writer,
      length,
      filteredCategories,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <h1>Add Movie</h1>
          <hr />
          <br />
          <label htmlFor="">Movie Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onChange}
            placeholder="Movie Name"
            required
          />
          <label htmlFor="">Movie Poster</label>
          <input type="file" name="poster" onChange={this.onChangeFile} />
          <div className="img-container">
            <img
              src={this.state.filePath}
              width="200"
              accept="image/*"
              alt=""
            />
          </div>
          <label htmlFor="">Length</label>
          <textarea
            type="text"
            name="length"
            onChange={this.onChange}
            value={length}
            placeholder="2h44m"
          />
          <label htmlFor="">Director</label>
          <textarea
            type="text"
            name="director"
            onChange={this.onChange}
            value={director}
            placeholder="Director"
          />
          <label htmlFor="">Writer</label>
          <textarea
            type="text"
            name="writer"
            onChange={this.onChange}
            value={writer}
            placeholder="Writer"
          />
          <label htmlFor="">Movie Description</label>
          <textarea
            type="text"
            name="description"
            onChange={this.onChange}
            value={description}
            placeholder="Description"
          />
          <label htmlFor="">Movie Release Date</label>
          <input
            type="date"
            name="date"
            onChange={this.onChange}
            value={date}
            required
          />
          <div className="flex">
            <div className="w50">
              <label htmlFor="">IMDB</label>
              <input
                type="number"
                name="imdb"
                onChange={this.onChange}
                value={imdb}
                min="0"
                max="10"
                step="0.1"
                required
              />
            </div>
            <div className="w50">
              <label htmlFor="">Rotten Tomatoes</label>
              <input
                type="number"
                name="rotten_tomatoes"
                onChange={this.onChange}
                value={rotten_tomatoes}
                min="0"
                max="100"
                step="1"
                required
              />
            </div>
          </div>
          <label htmlFor="">Age Rating</label>
          <select
            name="age_rating"
            selected={age_rating}
            onChange={this.onChange}
            required
          >
            <option value="">Age Rating</option>
            <option value="G">General audiences</option>
            <option value="PG">Parental guidance suggested</option>
            <option value="R">Restricted</option>
            <option value="PG-13">Parents Strongly Cautioned</option>
            <option value="NG-17">Adults Only</option>
          </select>
          <label htmlFor="">Categories</label>
          <input
            type="text"
            onChange={this.filterCategories}
            placeholder="Filter Categories"
          />
          <div className="categories">
            {filteredCategories.map((category) => {
              return (
                <p className="category" key={category}>
                  <input
                    type="checkbox"
                    onChange={this.onChangeCheckboxes}
                    checked={categories.includes(category)}
                    value={category}
                  />
                  {" "+category}
                </p>
              );
            })}
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}


export default UploadMovie;
