
import React from 'react'
import Books from './Books'
import AddBookForm from './AddBookForm'
import {HashRouter as Router, Route} from 'react-router-dom'
import SingleBook from './BookSingle'
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

  getBook(id) {
    return this.state.books.find(b => b.id == id)
  }


render () {
    return (
        <Router>
            <div>
                <h1>Welcome to Book Clubbed</h1>
                <hr></hr>
                  <div className='container'>
                    <hr></hr>
                    <div className='content'>
                        <Route exact={true} path='/' component={() => <Books books={this.state.books}/>} />
                        <Route exact={true} path='/add' component={AddBookForm} />
                        <Route path='/book/:id' component={(props) => <SingleBook getBook={this.getBook.bind(this)} book_id={props.match.params.id} />} />
                    </div>
                  </div>
              </div>
        </Router>
    )
}
}
