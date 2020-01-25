import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const ListBooks = props => {
  const { books } = props;

  const currentlyReading = [];
  const wantToRead = [];
  const read = [];

  if (books) {
    books.forEach(book => {
      if (book.shelf === 'currentlyReading') currentlyReading.push(book);
      if (book.shelf === 'wantToRead') wantToRead.push(book);
      if (book.shelf === 'read') read.push(book);
    });
  }
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>Book Club</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {currentlyReading.map(book => {
                  return (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        imageLink={book.imageLinks.smallThumbnail}
                        onShelfSelect={(book, shelf) =>
                          props.updateBookShelf(book, shelf)
                        }
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {wantToRead.map(book => {
                  return (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        imageLink={book.imageLinks.smallThumbnail}
                        onShelfSelect={(book, shelf) =>
                          props.updateBookShelf(book, shelf)
                        }
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {read.map(book => {
                  return (
                    <li key={book.id}>
                      <Book
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        imageLink={book.imageLinks.smallThumbnail}
                        onShelfSelect={(book, shelf) =>
                          props.updateBookShelf(book, shelf)
                        }
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default ListBooks;
