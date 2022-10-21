import React, { Component } from 'react';
import TasksPage from './TasksPage';
import { connect } from 'react-redux';
import { createTask, editTask, fetchTasks } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }))
  }

  render() {
    return (
      <div className="App">
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange} />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(App);
