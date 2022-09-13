import { Box, Center, HStack, Text } from 'native-base'

const TaskItem = ({ task }) => {
  return (
    <Center>
      <Box width='100%'>
        <HStack justifyContent='space-between'>
          <Text>{task.title}</Text>
          <Text>{task.username}</Text>
        </HStack>
      </Box>
    </Center>
  )
}

export default TaskItem
