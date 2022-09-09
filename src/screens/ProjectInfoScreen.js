import { Box, Heading } from 'native-base'
import TasksList from '../components/TasksComponents/TasksList'

const ProjectInfoScreen = () => {
  return (
    <Box safeArea>
      <Heading>Project name</Heading>
      <Box>
        <TasksList />
      </Box>
    </Box>
  )
}

export default ProjectInfoScreen
