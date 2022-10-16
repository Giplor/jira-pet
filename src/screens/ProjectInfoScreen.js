import { Box, HStack, Text, FlatList, Fab } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllProjectTasks,
  selectCurrentProject,
  selectProjectUsers,
} from '../redux/selectors/selectors'
import { deleteProject, setProjectId } from '../redux/slices/projectsSlice'
import AddUserIcon from '../components/UIComponents/AddUserIcon'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import { useEffect, memo } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import CreateTaskIcon from '../components/UIComponents/CreateTaskIcon'
import InfoHeader from '../components/UIComponents/InfoHeader'
import Loader from '../components/UIComponents/Loader'
import TaskItem from '../components/TasksComponents/TaskItem'
import { useFeedback } from '../hooks/useFeedback'
import CreateNewItem from '../components/UIComponents/CreateNewItem'

const RenderUserItem = memo(({ user }) => {
  return (
    <Box px='2'>
      <UserAvatar username={user.username} size='lg' />
    </Box>
  )
})

const UsersList = () => {
  const users = useSelector(selectProjectUsers)

  return (
    <Box>
      <Text>Developers - {users?.length}</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <RenderUserItem user={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  )
}

const RenderTaskItem = memo(({ task }) => {
  const navigation = useNavigation()

  const goToTaskInfo = () => {
    navigation.navigate('TaskInfo', { taskId: task.id })
  }

  return (
    <TaskItem
      onPress={goToTaskInfo}
      title={task.title}
      description={task.description}
      username={task?.user?.username}
    />
  )
})

const ProjectTasks = () => {
  const tasks = useSelector(selectAllProjectTasks)
  return (
    <Box>
      <Text>Tasks - {tasks.length}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <RenderTaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

const ProjectInfoScreen = ({ route }) => {
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)

  const { showFeedback } = useFeedback()

  useEffect(() => {
    dispatch(setProjectId(route.params.projectId))
    dispatch(fetchTasks())
  }, [])

  const goToAddUser = () => {
    navigation.navigate('AddUser')
  }

  const goToCreateNewTask = () => {
    navigation.navigate('CreateNewTask')
  }

  const errorDelete = (message) => {
    navigation.navigate('Projects')
    showFeedback(message)
  }

  const successDelete = () => {
    navigation.navigate('Projects')
  }

  const deleteThisProject = () => {
    dispatch(
      deleteProject({
        successDelete,
        errorDelete,
      })
    )
  }

  const loading = useSelector((state) => state.tasks.isLoading)

  if (loading) {
    return <Loader />
  }

  return (
    <Box flex={1} safeArea>
      <HStack alignSelf='flex-end' alignItems='center'>
        <CreateTaskIcon onPress={goToCreateNewTask} />
        <AddUserIcon onPress={goToAddUser} />
        <DeleteIcon onPress={deleteThisProject} deleteItem='project' />
      </HStack>
      <InfoHeader title={project?.title} description={project?.description} />
      <UsersList />
      <ProjectTasks />
      <CreateNewItem onPress={() => navigation.navigate('CreateNewTask')} />
    </Box>
  )
}

export default ProjectInfoScreen
