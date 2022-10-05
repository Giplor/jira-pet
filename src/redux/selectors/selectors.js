import { createSelector } from '@reduxjs/toolkit'

export const selectAllProjects = (state) => state.projects?.projects
export const selectCurrentUserId = (state) => state.user.user?.id
export const selectCurrentProjectId = (state) => state.projects?.projectId
export const selectCurrentTask = (state) => state.tasks?.task
export const selectAllProjectTasks = (state) => state.tasks?.tasks
export const selectAllUsers = (state) => state.users?.users

export const selectUserProjects = createSelector(
  [selectAllProjects, selectCurrentUserId],
  (allProjects, userId) => {
    return allProjects.filter((project) =>
      project.users.find((user) => user.id === userId)
    )
  }
)

export const selectCurrentProject = createSelector(
  [selectAllProjects, selectCurrentProjectId],
  (allProjects, projectId) => {
    return allProjects.find((project) => project.id === projectId)
  }
)

export const selectProjectUsers = createSelector(
  [selectCurrentProject],
  (project) => {
    return project?.users
  }
)

export const selectUsersNotInProject = createSelector(
  [selectAllUsers, selectProjectUsers],
  (allUsers, projectUsers) => {
    return allUsers.filter(
      (user) => !projectUsers.find((projectUser) => projectUser.id === user.id)
    )
  }
)
