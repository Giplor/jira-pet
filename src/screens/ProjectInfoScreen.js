import { Box, Heading } from 'native-base'
import TasksList from '../components/TasksComponents/TasksList'

const ProjectInfoScreen = ({ route }) => {
  return (
    <Box width='100%' height='100%' safeArea>
      <Heading>{route.params.projectName}</Heading>
      <TasksList />
    </Box>
  )
}

export default ProjectInfoScreen
