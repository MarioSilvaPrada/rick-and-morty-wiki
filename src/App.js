import React, { Component } from 'react';
import './App.css';

import Container from './components/Container'
import CharacterList from './components/CharacterList';
import SearchFilter from './components/SearchFiter';
import Pagination from './components/Pagination';

import Character from './components/Character'

class App extends Component {

  constructor() {
    super()
    this.state = {
      // characters: [],
      loading: true,
      searchFilter: '',
      page: 1
    }
  }

  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/charac  ')
  //     .then(response => response.json())
  //     .then(users => this.setState({ characters: users.results, loading: false }, () => console.log(this.state.characters)));
  // }


  searchChange = (e) => {
    this.setState({ searchFilter: e.target.value }, () => console.log(this.state.searchFilter))
  }

  pageChange = (num) => {
    this.setState({page: num}, ()=> console.log(this.state.page))
  }

  nextPage = () => {
    let currentPage = this.state.page;
    this.setState({ page:currentPage + 1 })

  }

  previousPage = () => {
    let currentPage = this.state.page;
    this.setState({ page:currentPage - 1 })
  }

  render() {
    
    return (
      <Container>
      <h1>Rick and Morty API</h1>
        <SearchFilter onChange={this.searchChange} />
        <Pagination 
              pageChange={this.pageChange}
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              pageSelected={this.state.page}
              />
        <CharacterList>
          <Character 
              searchFilter={this.state.searchFilter} 
              pageSelected={this.state.page}
               />
        </CharacterList>
      </Container>
    )
  }
}

export default App;
