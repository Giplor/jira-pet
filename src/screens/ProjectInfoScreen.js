import { Box, Heading, HStack, FlatList, Text, VStack, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentProject,
  selectAllProjectTasks,
} from '../redux/selectors/selectors'
import { deleteProject } from '../redux/slices/projectsSlice'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import AddUserIcon from '../components/UIComponents/AddUserIcon'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import EditIcon from '../components/UIComponents/EditIcon'

const RenderTaskItem = ({ task }) => {
  return (
    <Center py='2' width='100%'>
      <Box width='80%' rounded='lg' p='2' borderBottomWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <VStack flex={1}>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
          </VStack>
          <UserAvatar size='sm' username={task?.user?.username} />
        </HStack>
      </Box>
    </Center>
  )
}

const ProjectInfoScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)
  const tasks = useSelector(selectAllProjectTasks)

  const goToEditProject = () => {
    navigation.navigate('EditProject')
  }

  const deleteThisProject = () => {
    navigation.navigate('Projects')
    dispatch(deleteProject(project.id))
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <Box flex={1} safeArea>
      <HStack alignSelf='flex-end' alignItems='center'>
        <AddUserIcon />
        <DeleteIcon onPress={deleteThisProject} />
        <EditIcon onPress={goToEditProject} />
      </HStack>
      <Heading>{project.title}</Heading>
      <Text>Tasks - {tasks.length}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <RenderTaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default ProjectInfoScreen
