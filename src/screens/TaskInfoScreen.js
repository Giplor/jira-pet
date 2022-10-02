import { Text, Box } from 'native-base'
import { useSelector } from 'react-redux'
import { selectCurrentTask } from '../redux/selectors/selectors'

const TaskInfoScreen = () => {
  const task = useSelector(selectCurrentTask)

  return (
    <Box safeArea>
      <Text>{task.title}</Text>
    </Box>
  )
}

export default TaskInfoScreen
