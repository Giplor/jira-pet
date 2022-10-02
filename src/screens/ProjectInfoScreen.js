import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  FlatList,
  Pressable,
  Button,
  Spinner,
  Center,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllProjectTasks,
  selectCurrentProject,
} from '../redux/selectors/selectors'
import { deleteProject } from '../redux/slices/projectsSlice'
import { setTaskId } from '../redux/slices/tasksSlice'
import AddUserIcon from '../components/UIComponents/AddUserIcon'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import EditIcon from '../components/UIComponents/EditIcon'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import { useState } from 'react'
import ModalRename from '../components/UIComponents/ModalRename'
import CreateTaskIcon from '../components/UIComponents/CreateTaskIcon'

const RenderTaskItem = ({ task }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const goToTaskInfo = () => {
    dispatch(setTaskId(task.id))
    navigation.navigate('TaskInfo')
  }

  return (
    <Pressable py='2' width='100%' onPress={goToTaskInfo}>
      <Box width='80%' rounded='lg' p='2' borderBottomWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <VStack flex={1}>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
          </VStack>
          <UserAvatar size='sm' username={task?.user?.username} />
        </HStack>
      </Box>
    </Pressable>
  )
}

const ProjectTasks = () => {
  const tasks = useSelector(selectAllProjectTasks)

  return (
    <>
      <Text>Tasks: {tasks.length}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <RenderTaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

const ProjectInfoScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)

  const [loading, setLoading] = useState(true)

  const stopLoading = () => {
    setLoading(false)
  }

  useEffect(() => {
    dispatch(fetchTasks({ callback: stopLoading }))
  }, [])

  const goToProjectUsers = () => {
    navigation.navigate('ProjectUsers')
  }

  const goToAddUser = () => {
    navigation.navigate('AddUser')
  }

  const goToEditProject = () => {
    navigation.navigate('EditProject')
  }

  const goToCreateNewTask = () => {
    navigation.navigate('CreateNewTask')
  }

  const deleteThisProject = () => {
    dispatch(
      deleteProject({
        id: project.id,
        callback: () => navigation.navigate('Projects'),
      })
    )
  }
  if (loading) {
    return (
      <Center flex={1} safeArea>
        <Spinner size='lg' />
      </Center>
    )
  }

  return (
    <Box flex={1} safeArea>
      <HStack alignSelf='flex-end' alignItems='center'>
        <CreateTaskIcon onPress={goToCreateNewTask} />
        <AddUserIcon onPress={goToAddUser} />
        <DeleteIcon onPress={deleteThisProject} />
        <EditIcon onPress={goToEditProject} />
      </HStack>
      <Heading>{project.title}</Heading>
      <ModalRename title={project.title} description={project.description} />
      <Box width='100%' height='10%' maxHeight='70'>
        <Text>{project.description}</Text>
      </Box>
      <Button onPress={goToProjectUsers}>Users</Button>
      <ProjectTasks />
    </Box>
  )
}

export default ProjectInfoScreen
