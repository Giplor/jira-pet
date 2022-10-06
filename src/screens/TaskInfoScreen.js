import { Text, Box } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/UIComponents/Loader'
import { selectCurrentTask } from '../redux/selectors/selectors'
import { fetchTaskById, setTaskId } from '../redux/slices/tasksSlice'
import UserItem from '../components/UsersComponents/UserItem'
import InfoHeader from '../components/UIComponents/InfoHeader'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import { useFeedback } from '../hooks/useFeedback'

const TaskInfoScreen = ({ route, navigation }) => {
  const task = useSelector(selectCurrentTask)
  const dispatch = useDispatch()
  const { showFeedback } = useFeedback()

  const errorFetchTask = (message) => {
    navigation.navigate('ProjectInfo')
    showFeedback(message)
  }

  useEffect(() => {
    dispatch(setTaskId(route.params.taskId))
    dispatch(fetchTaskById({ errorFetchTask }))
  }, [])

  const loading = useSelector((state) => state.tasks.isLoading)
  if (loading) {
    return <Loader />
  }

  return (
    <Box flex={1} safeArea>
      <Box alignSelf='flex-end'>
        <DeleteIcon onPress={() => console.log(`delete icon press: ${task.id}`)} />
      </Box>
      <InfoHeader title={task.title} description={task.description} />
      <Box>
        <Text>Developer:</Text>
        <UserItem username={task?.user?.username} />
      </Box>
    </Box>
  )
}

export default TaskInfoScreen
