import React from 'react'
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './Home'
import SearchBooks from './SearchBooks'
import NotFound from './NotFound'
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
    if(book.shelf !== shelf || !book.shelf){
      //Update the new shelf on API
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        //Add the new book state shelf to the state
        let previousBooks = this.state.books.filter((b) => b.id !== book.id)
        this.setState((currentState) => {
          return { books: previousBooks.concat(book) }
        })
      })
    }
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
                <Home
                  books={this.state.books}
                  onChangeShelf={this.onChangeShelf}
                />
              )}
            />
            <Route exact path="/search" render={() => (
                <SearchBooks
                  books={this.state.books}
                  onChangeShelf={this.onChangeShelf}
                />
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
