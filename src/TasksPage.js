import React, { Component } from 'react'
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

export default class TasksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewCardForm: false,
      title: '',
      description: '',
    }
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm })
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value })
  }

  resetForm() {
    this.setState({
      showNewCardForm: false,
      title: 'title',
      description: 'descr',
    })
  }

  onCreateTask = (e) => {
    e.preventDefault()
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
    })
    this.resetForm()
  }

  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter(task => task.status === status)
      return <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={this.props.onStatusChange} />
    })
  };

  render() {
    // console.log('props from App: ', this.props);
    return (
      <div>
        {/* Form */}
        <div>
          <button className='p-3 border border-black rounded-xl hover:bg-slate-500' onClick={this.toggleForm}>+New Task</button>
        </div>
        <div>
          {this.state.showNewCardForm && (
            <div className='container flex-row justify-center'>
              <div className='w-1/3' style={{textAlign: 'center'}}>
                <form onSubmit={this.onCreateTask} className='inline-block flex flex-col'>
                  <input type="text" value={this.state.title} onChange={this.onTitleChange} className='border border-black h-10' />
                  <input type="text" value={this.state.description} onChange={this.onDescriptionChange} className='border border-black h-10' />
                  <input type="submit" value="Submit" onClick={this.onCreateTask} className='border border-gray-700 rounded-md bg-cyan-700'/>
                </form>
              </div>
            </div>
          )}
        </div>
        {/* TaskLists */}
        <div className='flex flex-row justify-around border border-blue-700 p-5'>{this.renderTaskLists()}</div>
      </div>
    )
  }
}
