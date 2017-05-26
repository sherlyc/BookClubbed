import React from 'react'
import {Link} from 'react-router-dom'

export default(props) => {

  return (
    <div>
      <h1>Book Clubbed!</h1>
      <div>
        {props.books.map((book) => {
          return (
            <div key={book.id}>
              <Link to={'/book/' + book.id}>
              <img src={book.image}/>
            </Link>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
            </div>
          )
        })}
      </div>
    </div>
  )

}
