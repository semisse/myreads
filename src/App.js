import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount(){
    //Get all the books
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onChangeShelf = (book, shelf) => {
    //Check to see if the state book shelf is different from the new shelf chosen
    if(book.shelf !== shelf){
      //Update the new shelf on API
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        //Add the new book state shelf to the state
        let previousBooks = this.state.books.filter((b) => b.id !== book.id)
        this.setState((currentState) => {
          books: previousBooks.concat(book)
        })
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/search" render={() => (
              <SearchBooks
                books={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            )}
          />
          <Route exact path="/" render={() => (
              <ListBooks
                books={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}

export default BooksApp
