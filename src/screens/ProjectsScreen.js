import { Button, Fab, Icon, Input, View } from 'native-base'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import { AntDesign } from '@expo/vector-icons'

const ProjectsScreen = () => {
  const dispatch = useDispatch()

  return (
    <View width='100%' safeArea>
      <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      <ProjectsList />
      <Fab
        renderInPortal={false}
        icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
        placement='bottom-right'
      />
    </View>
  )
}

export default ProjectsScreen
