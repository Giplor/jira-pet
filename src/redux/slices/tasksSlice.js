import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { dispatch, getState }) => {
    try {
      dispatch(setLoading(true))
      const projectId = getState().projects.projectId
      const answer = await axiosInstance.get(`projects/${projectId}/tasks`)
      dispatch(setTasks(answer.data.tasks))
    } catch (error) {
      console.log('error taksks/fetchTasks')
      console.log(error.response)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const createNewTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, description, userId }, { dispatch, getState }) => {
    try {
      dispatch(setLoading(true))
      const projectId = getState().projects.projectId
      await axiosInstance.post(`projects/${projectId}/tasks`, {
        title,
        description,
        status_id: 1,
        type_id: 1,
        user_id: userId,
      })
      dispatch(fetchTasks())
    } catch (error) {
      console.log('error tasks/createTask')
      console.log(error.response.data)
    } finally {
      dispatch(setLoading(false))
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
  isLoading: false,
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
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setTasks, setTaskId, setLoading } = tasksSlice.actions

export default tasksSlice.reducer
