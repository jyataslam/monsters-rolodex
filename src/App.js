import React, { Component } from "react";
import CardList from "./components/card-list/card-list.js";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    this.fetchMonsters();
  }

  fetchMonsters() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) =>
        this.setState({
          monsters: monsters,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
