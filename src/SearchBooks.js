import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
  state = {
    books: [],
  }

  onInputChange = (value) => {
      BooksAPI.search(value, 20).then((books) => {
        // Check for errors
        if(!books || books.error ){
          return this.setState({ books: [] });
        }
        // Search books; find if book is present on shelves;
        books = books.map(searchedBook => {
          let result = this.props.books.find(book => book.id === searchedBook.id);
          if(result) {
            searchedBook.shelf = result.shelf;
          }
          return searchedBook;
      	});
        this.setState({ books: books })
      });
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
    	        type="text"
    	        placeholder="Search by title or author"
              onChange={(event) => this.onInputChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf
              booksFiltered={this.state.books}
              onChangeShelf={this.props.onChangeShelf}
            />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
