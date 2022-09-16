import { Box, Heading, View } from 'native-base'
import TasksList from '../components/TasksComponents/TasksList'

const ProjectInfoScreen = ({ route }) => {
  return (
    <View width='100%' height='100%' safeArea>
      <Heading>{route.params.projectName}</Heading>
      <TasksList />
    </View>
  )
}

export default ProjectInfoScreen
