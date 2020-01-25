import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => <ListBooks books={this.state.books} />}
        />
        <Route path='/search' component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
