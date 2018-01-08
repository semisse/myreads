import React, { Component } from 'react';
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render() {
    //Filter by shelf
    const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead')
    const read = this.props.books.filter(book => book.shelf === 'read')

    return (
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
    )
  }
}

export default ListBooks
