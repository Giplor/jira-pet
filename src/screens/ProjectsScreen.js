import {
  Box,
  Center,
  Fab,
  FlatList,
  HStack,
  Icon,
  Pressable,
  VStack,
  Text,
  Spinner,
} from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect, memo } from 'react'
import { fetchProjects, setProjectId } from '../redux/slices/projectsSlice'
import { selectAllProjects } from '../redux/selectors/selectors'

const RenderProjectItem = memo(({ project }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const openProjectInfo = () => {
    dispatch(setProjectId(project.id))
    navigation.navigate('ProjectInfo')
  }

  return (
    <Pressable
      width='100%'
      onPress={openProjectInfo}
      _pressed={{ backgroundColor: 'coolGray.200' }}
      _disabled={{ backgroundColor: 'orange.500' }}
    >
      <Box borderBottomWidth={1} py='2'>
        <VStack>
          <HStack justifyContent='space-between'>
            <Text fontSize='xl' bold>
              {project.title}
            </Text>
            <Text>Tasks: {project.task_count}</Text>
          </HStack>
          <Text color='coolGray.700'>{project.description}</Text>
        </VStack>
      </Box>
    </Pressable>
  )
})

const ProjectsList = () => {
  const projects = useSelector(selectAllProjects)
  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => <RenderProjectItem project={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
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
    return (
      <Center flex={1}>
        <Spinner size='lg' />
      </Center>
    )
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
