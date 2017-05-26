import React from 'react'
import {Link} from 'react-router-dom'

export default class Book extends React.Component {
  render() {
    let book = this.props.getBook(this.props.book_id) || {}
    return (
      <div className='book'>
        <img src={book.image}/>
        <h3>{book.title}</h3>

        Book synopsis: {book.description}

        <p>
          <Link to='/'>Return to Book List</Link>
        </p>
      </div>
    )
  }
}
