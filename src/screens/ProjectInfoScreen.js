import {
  Box,
  Button,
  Heading,
  HStack,
  FlatList,
  Text,
  VStack,
  Center,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import EditButton from '../components/UIComponents/EditButton'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentProject,
  selectAllProjectTasks,
} from '../redux/selectors/selectors'
import { useEffect } from 'react'
import { deleteTask, fetchTasks } from '../redux/slices/tasksSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'

const RenderTaskItem = ({ task }) => {
  const dispatch = useDispatch()

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <Center py='2'>
      <Box width='80%' rounded='lg' p='2' borderBottomWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <VStack flex={1}>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
          </VStack>
          <UserAvatar size='sm' username={task?.user?.username} />
        </HStack>
        <Button.Group alignSelf='flex-end'>
          <Button>EDIT</Button>
          <Button colorScheme='danger' onPress={handleDeleteTask}>
            Delete
          </Button>
        </Button.Group>
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

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <Box flex={1} safeArea>
      <HStack alignItems='center' justifyContent='space-between'>
        <Heading>{project.title}</Heading>
        <EditButton onPress={goToEditProject} />
      </HStack>
      <Button onPress={() => navigation.navigate('AddUser')}>ADD USER</Button>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <RenderTaskItem task={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text>Tasks - {tasks.length}</Text>}
      />
    </Box>
  )
}

export default ProjectInfoScreen
