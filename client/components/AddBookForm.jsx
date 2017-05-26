import React from 'react'
import * as api from '../api'

export default class AddBookForm extends React.Component {
    constructor (props){
        super(props)
        this.itemModel = {  title: '', description: '', author: '', image: '', genre: ''}
        this.state = {
          item : {...this.itemModel}
        }
      }

      handleSubmit (evt) {
        evt.preventDefault()

        this.setState({
          item: { ...this.itemModel }
        })
        api.saveBook(this.state.item, function(){
          this.props.history.push('/')
        }.bind(this))

      }

      handleChange (evt) {
        const field = evt.target.name
        this.setState({
          item: {
            ...this.state.item,
            [field]: evt.target.value
          }
        })

      }

      render () {
        return (
          <form onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" value={this.state.item.title} onChange={this.handleChange.bind(this)} />

              <label htmlFor="description">Description</label>
              <textarea className="textbox" name="description" value={this.state.item.description} onChange={this.handleChange.bind(this)} />

              <label htmlFor="name">Author</label>
              <input type="text" name="author" value={this.state.item.author} onChange={this.handleChange.bind(this)} />

              <label htmlFor="image">Image</label>
              <input type="text" name="image" value={this.state.item.image} onChange={this.handleChange.bind(this)} />

              <label htmlFor="name">Genre</label>
               <input type="text" name="genre" value={this.state.item.genre} onChange={this.handleChange.bind(this)} />

            <input type="submit" value="Add" />
          </form>
        )
    }
}
