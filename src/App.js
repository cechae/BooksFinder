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
    this.setState({isAppMounted: false})
    //fetch request will be sent when the search button is clicked
    console.log("search field was " + this.state.searchField)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=${apiKey}`)
      .then(response => response.json())
      .then(result => {
        this.setState({books: result.items, isAppMounted: true})
      });
  }
  
  componentDidMount() {
    // Initial fetch request to fill up the placeholder book list.
    if (this.state.searchField === "placeholder") {
      // run a default books search
      fetch(`https://www.googleapis.com/books/v1/volumes?q=books&key=${apiKey}`)
      .then(response => response.json())
      .then(result => {
        this.setState({books: result.items, isAppMounted: true })
      });
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
