import React from 'react'
import Books from './Books'
import AddBookForm from './AddBookForm'
import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {


render () {
    return (
        <Router>
            <div>
                <h1>Welcome to Book Clubbed</h1>
                <hr></hr>
                  <div className='container'>
                    <hr></hr>
                    <div className='content'>
                        <Route exact={true} path='/books' component={Books} />
                        <Route exact={true} path='/add' component={AddBookForm} />
                    </div>
                  </div>
              </div>
        </Router>
    )
}
}
