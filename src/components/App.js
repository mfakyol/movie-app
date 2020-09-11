import React from "react";
import "../helpers/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import UploadMovie from "./UploadMovie";
import MovieDetail from "./MovieDetail";
import Home from "./Home";

function App(props) {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/upload" exact component={UploadMovie}></Route>
        <Route path="/detail/:id" exact component={MovieDetail}></Route>
      </Router>
    </div>
  );
}

export default App;
