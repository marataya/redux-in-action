import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function fetchTasks() {
  return client.get('/tasks')
}

export function createTask(prms) {
  return client.post('/tasks', prms)
}

export function editTask(id, prms) {
  return axios.put(`${API_BASE_URL}/tasks/${id}`, prms)
} 