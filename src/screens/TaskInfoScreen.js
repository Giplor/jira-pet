import { Text, Box } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UIComponents/Loader'
import { selectCurrentTask } from '../redux/selectors/selectors'
import { fetchTaskById, setTaskId } from '../redux/slices/tasksSlice'
import UserItem from '../components/UsersComponents/UserItem'
import InfoHeader from '../components/UIComponents/InfoHeader'

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
    <Box flex={1} safeArea>
      <InfoHeader title={task.title} description={task.description} />
      <Text>Developer:</Text>
      <UserItem username={task?.user?.username} />
    </Box>
  )
}

export default TaskInfoScreen
