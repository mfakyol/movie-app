import React, { Component } from "react";
import "../../helpers/navbar.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import burgerIcon from '../../images/burger-icon.png'

export default class Navbar extends Component {
  state = {
    maxHeight: "73px",
    isOpened: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY === 0) {
        this.setState({ maxHeight: "325px" });
      } else if (!this.state.isOpened) {
        this.setState({ maxHeight: "73px" });
      }
    });
  }

  toggleMenu() {
    if (this.state.maxHeight === "73px") {
      this.setState({ maxHeight: "325px", isOpened: true });
      setTimeout(() => {
        this.setState({ isOpened: false });
      }, 500);
    } else {
      this.setState({ maxHeight: "73px" });
    }
  }
  render() {
    return (
      <header>
        <div className="nav" style={{ maxHeight: this.state.maxHeight }}>
          <div className="logo">

           <a href="/">            <img src={logo} alt="logo" /> Movie App</a>
           <img
            onClick={() => this.toggleMenu()}
            src={burgerIcon}
            alt="burger"
            width="40px"
            className="burger-menu"
          />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/mfakyol">Github</a>
            </li>
          </ul>
          <div className="search">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </header>
    );
  }
}
