import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Book from '../components/Book';

class SearchPage extends React.Component {
  state = {
    query: '',
    books: []
  };

  updateQuery = query => {
    // this.setState({
    //   query: query.trim()
    // });
    BooksAPI.search(query).then(books => {
      if (books) {
        this.setState({
          query: query,
          books: books
        });
      } else {
        this.setState({ query: query });
      }
    });
  };

  clearQuery = () => {
    this.setState({
      query: ''
    });
  };

  componentDidMount() {
    // BooksAPI.getAll().then(books => {
    //   this.setState({ books: books });
    // });
  }

  render() {
    const { books } = this.state;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.map((book, id) => {
              return (
                <li key={id}>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    imageLink={book.imageLinks.smallThumbnail}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
