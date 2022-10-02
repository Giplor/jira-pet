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
  async ({ title, description, callback }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      await axiosInstance.post('/projects', {
        title,
        description,
      })
      dispatch(fetchProjects())
      callback?.()
    } catch (error) {
      console.log('error projects/createProject')
      console.log(error.response.data)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const editProject = createAsyncThunk(
  'projects/editProject',
  async ({ projectId, title, description, callback }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      await axiosInstance.put(`/projects/${projectId}`, {
        title,
        description,
      })
      dispatch(fetchProjects())
      callback?.()
    } catch (error) {
      console.log('error projects/editProject')
      console.log(error.response.data)
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const addUserToProject = createAsyncThunk(
  'projects/addUserToProject',
  async ({ userId, projectId }, { dispatch }) => {
    try {
      await axiosInstance.post(`/projects/${projectId}/users`, {
        user_id: userId,
      })
      dispatch(fetchProjects())
    } catch (error) {
      console.log('error projects/addUserToProject')
      console.log(error.response.data)
    }
  }
)

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async ({ id }, { dispatch }) => {
    try {
      dispatch(setLoading(true))
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
