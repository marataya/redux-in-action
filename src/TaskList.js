import React from 'react'
import Task from './Task'

const TaskList = props => {
  return (
    <div className='w-1/4'>
      <div className='font-bold text-xl text-center pb-5 border-b-2 border-blue-700'>{props.status}</div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} onStatusChange={props.onStatusChange}/>
      ))}
    </div>
  )
}

export default TaskList