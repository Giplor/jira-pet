import { Text, Box } from 'native-base'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UIComponents/Loader'
import { selectCurrentTask } from '../redux/selectors/selectors'
import { fetchTaskById, setTaskId } from '../redux/slices/tasksSlice'

const TaskInfoScreen = ({ route }) => {
  const task = useSelector(selectCurrentTask)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTaskId(route.params.taskId))
    dispatch(fetchTaskById())
  }, [])

  const loading = useSelector((state) => state.tasks.isLoading)
  if (loading) {
    return <Loader />
  }

  return (
    <Box safeArea>
      <Text>{task?.title}</Text>
      <Text>{task?.description}</Text>
    </Box>
  )
}

export default TaskInfoScreen
