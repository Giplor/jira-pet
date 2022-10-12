import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios'

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const answer = await axiosInstance.get('/projects')
      dispatch(setProjects(answer.data))
    } catch (error) {
      console.log('error projects/fetchProjects')
      console.log(error.response)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const createNewProject = createAsyncThunk(
  'projects/createProject',
  async ({ title, description, successCallback, errorCallback }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      await axiosInstance.post('/projects', {
        title,
        description,
      })
      dispatch(fetchProjects())
      successCallback?.()
    } catch (error) {
      dispatch(setLoading(false))
      errorCallback?.(error.response.data.title || error.response.data.description)
    }
  }
)

export const addUserToProject = createAsyncThunk(
  'projects/addUserToProject',
  async ({ userId, errorCallback }, { dispatch, getState }) => {
    try {
      const projectId = getState().projects.projectId
      await axiosInstance.post(`/projects/${projectId}/users`, {
        user_id: userId,
      })
      dispatch(fetchProjects())
    } catch (error) {
      errorCallback?.(error.response.data.error)
    }
  }
)

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async ({ successDelete, errorDelete }, { dispatch, getState }) => {
    try {
      dispatch(setLoading(true))
      const projectId = getState().projects.projectId
      await axiosInstance.delete(`/projects/${projectId}`)
      successDelete?.()
    } catch (error) {
      errorDelete?.(error.response.data.detail)
      console.log('error projects/deleteProject')
      console.log(error.response)
    } finally {
      dispatch(fetchProjects())
    }
  }
)

const initialState = {
  projects: [],
  projectId: '',
  isLoading: false,
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },
    setProjectId: (state, action) => {
      state.projectId = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setProjects, setProjectId, setLoading } = projectsSlice.actions

export default projectsSlice.reducer
