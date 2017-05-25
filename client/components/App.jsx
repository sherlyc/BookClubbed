import React from 'react'

import Task from './task'
import AddTask from './AddTask'
import * as api from '../api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }
  componentDidMount() {
    this.refreshTasks()
  }

  refreshTasks() {
    api.getTasks((tasks) => {
      this.setState({tasks})
    })
  }
  saveTask(task) {
    api.saveTask(task, () => {
      this.refreshTasks()
    })
  }
  render () {
    return (
      <div> 
        <h1>Todo List</h1>
        <AddTask saveCallback={this.saveTask.bind(this)}/>
        <ul>
          {this.state.tasks.map(task => <Task key={task.id} task={task} />)}
        </ul>
      </div>
    )
  }
}
