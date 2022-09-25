import { createSelector } from '@reduxjs/toolkit'

export const selectAllProjects = (state) => state.projects.projects
export const selectCurrentUserId = (state) => state.user.user?.id

export const selectUserProjects = createSelector(
  [selectAllProjects, selectCurrentUserId],
  (allProjects, userId) => {
    return allProjects.filter((project) =>
      project.users.find((user) => user.id === userId)
    )
  }
)
