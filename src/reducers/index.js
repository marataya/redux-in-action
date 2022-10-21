export default function tasks(state = { tasks: [] }, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case 'CREATE_TASK': {
      return {
        tasks: state.tasks.concat(action.payload)
      }
    };
    case 'EDIT_TASK': {
      const { payload } = action
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.task.id) {
            return payload.task
          }
          return task
        })
      }
    };
    case 'FETCH_TASK_SUCCEEDED': {
      console.log('fetchTasks')
      return {
        tasks: action.payload.tasks
      }
    }
    // eslint-disable-next-line no-lone-blocks
    case 'CREATE_TASK_SUCCEEDED': {
      return {
        tasks: state.tasks.concat(action.payload.task)
      }
    }
  }
  return state

}