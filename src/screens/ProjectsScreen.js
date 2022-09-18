import { Box, Button, Fab, Icon, Input, View } from 'native-base'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <Box width='100%' safeArea>
      <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      <ProjectsList />
      <Fab
        renderInPortal={false}
        icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
        placement='bottom-right'
        onPress={() => navigation.navigate('CreateNewProject')}
      />
    </Box>
  )
}

export default ProjectsScreen
