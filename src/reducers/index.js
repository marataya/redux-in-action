const initialState = {
  tasks: [],
  isLoading: false,
}

export default function tasks(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case 'CREATE_TASK': {
      return {
        tasks: state.tasks.concat(action.payload)
      }
    };
    case 'EDIT_TASK_SUCCEEDED': {
      const { payload } = action
      const nextTasks = state.tasks.map(task => {
        if (task.id === payload.task.id) {
          return payload.task
        }
        return task
      })
      return {
        ...state,
        tasks: nextTasks,
      }
    };
    case 'FETCH_TASK_SUCCEEDED': {
      console.log('fetchTasks')
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.tasks
      }
    }
    // eslint-disable-next-line no-lone-blocks
    case 'CREATE_TASK_SUCCEEDED': {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      }
    }
  }
  return state

}