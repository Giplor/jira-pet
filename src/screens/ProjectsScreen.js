import { Box, Button } from 'native-base'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import ModalCreateProject from '../components/ProjectsComponents/ModalCreateProject'

const ProjectsScreen = () => {
  const dispatch = useDispatch()

  return (
    <Box width='100%' safeArea position='absolute'>
      <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      <ProjectsList />
      <ModalCreateProject />
    </Box>
  )
}

export default ProjectsScreen
