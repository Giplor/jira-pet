import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { dispatch }) => {
    try {
      const answer = await axiosInstance.get('/projects')
      dispatch(setProjects(answer.data))
    } catch (error) {
      console.log('error projects/fetchProjects')
      console.log(error.response)
    }
  }
)

export const createNewProject = createAsyncThunk(
  'projects/createProject',
  async ({ title, description }, { dispatch }) => {
    try {
      await axiosInstance.post('/projects', {
        title,
        description,
      })
      dispatch(fetchProjects())
    } catch (error) {
      console.log('error projects/createProjects')
      console.log(error.response)
    }
  }
)

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (id, { dispatch }) => {
    try {
      await axiosInstance.delete(`/projects/${id}`)
      dispatch(fetchProjects())
    } catch (error) {
      console.log('error projects/deleteProject')
      console.log(error.response)
    }
  }
)

const initialState = {
  projects: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },
  },
})

export const { setProjects } = projectsSlice.actions

export default projectsSlice.reducer
