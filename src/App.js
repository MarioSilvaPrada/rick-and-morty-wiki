import React, { Component } from "react";
import "./App.css";

import Container from "./components/Container";
import CharacterList from "./components/CharacterList";
import SearchFilter from "./components/SearchFiter";
import Pagination from "./components/Pagination";

import Character from "./components/Character";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // characters: [],
      loading: true,
      searchFilter: ""
    };
  }

  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/charac  ')
  //     .then(response => response.json())
  //     .then(users => this.setState({ characters: users.results, loading: false }, () => console.log(this.state.characters)));
  // }

  searchChange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    return (
      <Container>
        <h1 className="title"> Rick and Morty Wikipedia </h1>
        <SearchFilter onChange={this.searchChange} />
        <Pagination match={this.props.match} />
        <CharacterList>
          <Character
            searchFilter={this.state.searchFilter}
            pageSelected={this.state.page}
            match={this.props.match}
          />
        </CharacterList>
      </Container>
    );
  }
}

export default App;
