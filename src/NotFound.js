import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render(){
    return(
      <div>
        <h1>Ups! Page not found!</h1>
        <Link to="/">Go back to homepage</Link>
      </div>
    )
  }
}

export default NotFound
