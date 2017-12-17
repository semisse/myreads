import React, { Component } from 'react'
import ListBooks from './ListBooks'
import Header from './Header'
import SearchButton from './SearchButton'

class Home extends Component {
  render(){
    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <ListBooks books={this.props.books} onChangeShelf={this.props.onChangeShelf} />
        </div>
        <SearchButton />
      </div>
    )
  }
}

export default Home
