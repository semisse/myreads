import React, { Component } from 'react'
import sortBy from 'sort-by'

class BookShelf extends Component {
  render() {
    //Sort by title
    this.props.booksFiltered.sort(sortBy('title'))
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          //Grab each book
          {this.props.booksFiltered.map((book) =>
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  // Check if there are images or not and grab them
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    //Go get the value to the state, on change send to parent all the book state and the shelf chosen
                    <select value={book.shelf} onChange={(e) => this.props.onChangeShelf(book, e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                 <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  //In case there are more than one author
                  {book.authors.map((author) =>
                    <div key={author}>
                      <span>{author}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default BookShelf
