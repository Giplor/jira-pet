import { Box, Center, Fab, FlatList, Icon } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect, memo } from 'react'
import { fetchProjects } from '../redux/slices/projectsSlice'
import { selectAllProjects } from '../redux/selectors/selectors'
import ProjectItem from '../components/ProjectsComponents/ProjectItem'
import Loader from '../components/UIComponents/Loader'

const RenderProjectItem = memo(({ project }) => {
  const navigation = useNavigation()

  const openProjectInfo = () => {
    navigation.navigate('ProjectInfo', { projectId: project.id })
  }

  return (
    <ProjectItem
      onPress={openProjectInfo}
      title={project.title}
      description={project.description}
      taskCount={project.task_count}
    />
  )
})

const ProjectsList = () => {
  const projects = useSelector(selectAllProjects)
  const dispatch = useDispatch()

  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => <RenderProjectItem project={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      refreshing={false}
      onRefresh={() => dispatch(fetchProjects())}
    />
  )
}

const ProjectsScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const loading = useSelector((state) => state.projects.isLoading)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Center flex={1} safeArea>
      <Box width='80%' height='100%'>
        <ProjectsList />
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
