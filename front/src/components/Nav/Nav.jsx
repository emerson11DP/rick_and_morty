import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <SearchBar onSearch={this.props.onSearch} />
        </nav>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/About">
          <button>About</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
