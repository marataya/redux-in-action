import React from 'react'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']


const Task = (props) => {
  return (
    <div className='border border-[#0cb] p-3'>
      <div className='font-bold text-base text-center'>{props.task.title}</div>
      <div className="task-body p-5">{props.task.description}</div>
      <select value={props.task.status} onChange={onStatusChange}>
        {TASK_STATUSES.map((status) =>(
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  )
  function onStatusChange (e) {
    props.onStatusChange(props.task.id, e.target.value)
  }
}


export default Task