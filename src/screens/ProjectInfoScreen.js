import { Box, Heading, Fab, Icon } from 'native-base'
import TasksList from '../components/TasksComponents/TasksList'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProjectInfoScreen = ({ route }) => {
  const navigation = useNavigation()

  return (
    <Box width='100%' height='100%' safeArea>
      <Heading>{route.params.projectName}</Heading>
      <TasksList />
      <Fab
        renderInPortal={false}
        icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
        placement='bottom-right'
        onPress={() => navigation.navigate('CreateNewTask')}
      />
    </Box>
  )
}

export default ProjectInfoScreen
