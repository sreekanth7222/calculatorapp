import { Component } from "react";

import Calculator from "./Calculator";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Basic Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default Home;
