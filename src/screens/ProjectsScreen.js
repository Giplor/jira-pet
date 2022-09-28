import { Box, Center, Fab, Icon } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { fetchProjects } from '../redux/slices/projectsSlice'
import { selectAllProjects } from '../redux/selectors/selectors'

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const projects = useSelector(selectAllProjects)
  console.log('render')
  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <Center width='100%' height='100%' safeArea>
      <Box width='80%' height='100%'>
        <ProjectsList data={projects} />
      </Box>
      <Fab
        renderInPortal={false}
        icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
        placement='bottom-right'
        onPress={() => navigation.navigate('CreateNewProject')}
      />
    </Center>
  )
}

export default ProjectsScreen
