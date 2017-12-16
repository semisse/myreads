import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookShelf from './BookShelf'

class SearchBooks extends Component {
  state = {
    query: '',
  }

  componentDidMount(){
    //So you don't have to do an extra click on the element
    document.getElementById("search-input").focus();
  }

  updateQuery = (newQuery) => {
    //Update the query with the input value and trim out spaces
    this.setState({ query: newQuery.trim() })
  }

  render() {

    let showBooks

    if (this.state.query) {
      //Search for matches, filter them and put them in showBooks let
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      //Otherwise, just show nothing
      showBooks = this.props.books.filter((book) => book.title === '')
    }

    //Sort by title
    showBooks.sort(sortBy('title'))

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input id="search-input" type="text" placeholder="Search by title or author" onChange={ (e) => {this.updateQuery(e.target.value)} } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf booksFiltered={showBooks} onChangeShelf={this.props.onChangeShelf} />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
