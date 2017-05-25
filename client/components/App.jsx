import React from 'react'
import * as api from '../api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    api.getBooks((books) => this.setState({books}))

  }

  render() {
    return (
      <div>
        <h1>Book Clubbed!</h1>
        <div>
          {this.state.books.map((book) => {
            return (
              <div>
                <img src={book.image}/>
                <h3>{book.title}</h3>
                <li>{book.author}</li>
                <li>{book.genre}</li>
                <li>{book.rating}</li>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
