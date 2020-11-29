import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import BookList from './BookList';
import Title from './Title';
import Box from '@material-ui/core/Box';

const apiKey = "AIzaSyD_BNLanxv7-PMUbA6ssyYyfaanJLA0JjI";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchField: "placeholder",
      isAppMounted: false,
    }
  }

  handleSearchClick = () => {
    if (!this.state.searchField.trim()) {
      // empty string, add a warning that says "Please input search words here. "
    }
    this.setState({isAppMounted: false});
    console.log("search field was " + this.state.searchField)
    this.fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=${apiKey}`);
  }
  async fetchBooks (url){
    try {
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ books: data.items, isAppMounted: true })
    } catch (e) {
      console.log(e)
    }
  }
  
  componentDidMount() {
    // Initial fetch request to fill up the placeholder book list.
    if (this.state.searchField === "placeholder") {
      // fetch(`https://www.googleapis.com/books/v1/volumes?q=books&key=${apiKey}`)
      // .then(response => response.json())
      // .then(result => {
      //   this.setState({books: result.items, isAppMounted: true })
      // });
      this.fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=books&key=${apiKey}`);
    } 
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Box>
            <Title/>
            <SearchBox handleSearchClick={this.handleSearchClick} placeholder="Search books..." handleChange={(e) => this.setState({searchField: e.target.value})} />
            <BookList data={this.state.books} isMounted={this.state.isAppMounted}/>
          </Box>
        </div>
      </div>
    );
  }
}

export default App;
