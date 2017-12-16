import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render() {
    //Filter by shelf
    const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead')
    const read = this.props.books.filter(book => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookShelf booksFiltered={currentlyReading} onChangeShelf={this.props.onChangeShelf} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelf booksFiltered={wantToRead} onChangeShelf={this.props.onChangeShelf} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookShelf booksFiltered={read} onChangeShelf={this.props.onChangeShelf} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks