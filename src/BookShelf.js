import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    return(
      <div className="bookshelf-books">
        <Book booksFiltered={this.props.booksFiltered} onChangeShelf={this.props.onChangeShelf} />
      </div>
    )
  }
}

export default BookShelf
