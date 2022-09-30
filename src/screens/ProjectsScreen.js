import { Box, Center, Fab, FlatList, Icon } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { fetchProjects } from '../redux/slices/projectsSlice'
import { selectAllProjects } from '../redux/selectors/selectors'

const ProjectList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderProjectItem project={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const projects = useSelector(selectAllProjects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <Center flex={1} safeArea>
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
