import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import BookList from './BookList';
import Title from './Title';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Book from './Book';


const apiKey = "AIzaSyD_BNLanxv7-PMUbA6ssyYyfaanJLA0JjI";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      book: null,
      searchField: "placeholder",
      isAppMounted: false,
    }
  }

  handleSearchClick = () => {
    if (!this.state.searchField.trim()) {
      // empty string, add a warning that says "Please input search words here. "
    }
    this.setState({isAppMounted: false});
    this.fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=${apiKey}`);
  }
  async fetchBooks (url){
    try {
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ books: data.items, isAppMounted: true })
    } catch (e) {
      // API returns an error, just display the generic "Ooops no books found.." error page.
      this.setState({ books: null, isAppMounted: true })
      console.log(e)
    }
  }
  seeDetail = (bookDetail, idx) => {
    this.setState({ book : bookDetail })
  }
  
  componentDidMount() {
    // Initial fetch request to fill up the placeholder book list.
    if (this.state.searchField === "placeholder") {
      this.fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=books&key=${apiKey}`);
    } 
  }
  
  render() {

    return (
    <Router>
        <Switch>
          <Route exact path="/">
              <div className="App">
                <div className="container">
                  <Box>
                    <Title/>
                    <SearchBox handleSearchClick={this.handleSearchClick} placeholder="Search books..." handleChange={(e) => this.setState({searchField: e.target.value})} />
                    <BookList data={this.state.books} isMounted={this.state.isAppMounted} seeDetail={this.seeDetail} />
                  </Box>
                </div>
              </div>
          </Route>
          <Route exact path="/book/:id">
            <div className="App">
              <div className="container">
                <Book detail={this.state.book} />
              </div>
            </div>
          </Route>
          <Route exact path="/book/:id">
            
          </Route>
        </Switch>
    </Router>

    );
  }
}

export default App;
