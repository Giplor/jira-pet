import { Box, Text } from 'native-base'

const TaskItem = ({ task }) => {
  return (
    <Box>
      <Text>{task.title}</Text>
    </Box>
  )
}

export default TaskItem
