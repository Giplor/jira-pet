import { Box, Button, Fab, Icon } from 'native-base'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { fetchProjects } from '../redux/slices/projectsSlice'

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const projects = useSelector((state) => state.projects.projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <Box width='100%' height='100%' safeArea>
      <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      <ProjectsList data={projects} />
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
