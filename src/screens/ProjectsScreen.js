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
} from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { fetchProjects, setProjectId } from '../redux/slices/projectsSlice'
import { selectAllProjects } from '../redux/selectors/selectors'

const RenderProjectItem = ({ project }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const openProjectInfo = () => {
    dispatch(setProjectId(project.id))
    console.log(project.id)
    navigation.navigate('ProjectInfo')
  }

  return (
    <Pressable width='100%' onPress={openProjectInfo}>
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
}

const ProjectsList = ({ data }) => {
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
