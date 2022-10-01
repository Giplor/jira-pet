import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { dispatch, getState }) => {
    try {
      const projectId = await getState().projects.projectId
      const answer = await axiosInstance.get(`projects/${projectId}/tasks`)
      dispatch(setTasks(answer.data.tasks))
    } catch (error) {
      console.log('error taksks/fetchTasks')
      console.log(error.response)
    } finally {
    }
  }
)

export const createNewTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, description }, { dispatch, getState }) => {
    try {
      const projectId = getState().projects.projectId
      await axiosInstance.post(`projects/${projectId}/tasks`, {
        title,
        description,
        status_id: 1,
        type_id: 1,
        user_id: 72,
      })
      dispatch(fetchTasks())
    } catch (error) {
      console.log('error tasks/createTask')
      console, log(error.response.data)
    }
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { dispatch, getState }) => {
    try {
      const projectId = getState().projects.projectId
      await axiosInstance.delete(`projects/${projectId}/tasks/${id}`)
      dispatch(fetchTasks())
    } catch (error) {
      console.log('error tasks/deleteTask')
      console.log(error.response)
    }
  }
)

const initialState = {
  tasks: [],
  taskId: '',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload
    },
    setTaskId: (state, action) => {
      state.taskId = action.payload
    },
  },
})

export const { setTasks } = tasksSlice.actions

export default tasksSlice.reducer
