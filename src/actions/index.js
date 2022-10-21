import { applyMiddleware } from 'redux'
import * as api from '../api'

// let _id = 1

// export function uniqueId() {
//   return _id++
// }

// export function editTask(id, params = {}) {
//   return {
//     type: 'EDIT_TASK',
//     payload: {
//       id,
//       params
//     }
//   }
// }

export function editTaskSucceeded(task) {
  return {
    type: 'EDIT_TASK',
    payload: {
      task,
    }
  }
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id)
    const updatedTask = Object.assign({}, task, params)

    api.editTask(id, updatedTask).then(response => {
      dispatch(editTaskSucceeded(response.data))
    })
  }
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id)
}

function fetchTaskSucceeded(tasks) {
  console.log('fetchTaskSucceeded')
  return {
    type: 'FETCH_TASK_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

export function fetchTasks() {
  return dispatch => {
    api.fetchTasks()
      .then(response => {
        dispatch(fetchTaskSucceeded(response.data))
      })
  }
}

function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      task,
    },
  }
}

// old sync version
// export function createTask({ title, description }) {
//   return {
//     type: 'CREATE_TASK',
//     payload: {
//       id: uniqueId(),
//       title,
//       description,
//       status: 'Unstarted'
//     }
//   }
// }

export function createTask({ title, description, status = 'Unstarted' }) {
  return dispatch => {
    api.createTask({ title, description, status }).then(response => {
      dispatch(createTaskSucceeded(response.data))
    })
  }
}