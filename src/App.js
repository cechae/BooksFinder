import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import SearchBox from './SearchBox';
import BookList from './BookList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      isAuthenticated: false, 
      user: null, 
      token: ''
    }
  }
  
  componentDidMount() {
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD_BNLanxv7-PMUbA6ssyYyfaanJLA0JjI")
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({books: result.items})
    });
    
  }
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key)
//   .then(response => response.json())
//   .then(result => {
// this.setState({ books: result.items})
// })}
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <SearchBox placeholder="Enter country name..." handleChange={(e) => this.setState({searchField: e.target.value})} />
          <BookList/>
        </header>
      </div>
    );

  }
  
}

export default App;
