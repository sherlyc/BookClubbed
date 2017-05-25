import React from 'react'

export default class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveCallback(this.state)
    this.setState({name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name='name' value={this.state.name} onChange={this.handleChange.bind(this)} />
        <input type='submit' value='Save' />
      </form>
    )
  }
}
