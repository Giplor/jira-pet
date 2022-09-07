import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { dispatch, getState }) => {
    try {
      const projectId = await getState().tasks.projectId
      const answer = await axiosInstance.get(`projects/${projectId}/tasks`)
      dispatch(setTasks(answer.data.tasks))
    } catch (error) {
      console.log('error taksks/fetchTasks')
      console.log(error.response)
    }
  }
)

export const createNewTask = createAsyncThunk(
  'tasks/createTask',
  async ({ title, description }, { dispatch, getState }) => {
    try {
      const projectId = getState().tasks.projectId
      const answer = await axiosInstance.post(`projects/${projectId}/tasks`, {
        title,
        description,
        status_id: 1,
        type_id: 1,
        user_id: 72,
      })
      dispatch(fetchTasks())
    } catch (error) {
      console.log('error tasks/createTask')
      console, log(error.response)
    }
  }
)

const initialState = {
  tasks: [],
  projectId: '',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload
      console.log(current(state))
    },
    setProjectId: (state, action) => {
      state.projectId = action.payload
    },
  },
})

export const { setTasks, setProjectId } = tasksSlice.actions

export default tasksSlice.reducer
