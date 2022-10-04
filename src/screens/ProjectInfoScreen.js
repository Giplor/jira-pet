import { Box, HStack, Text, VStack, FlatList, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllProjectTasks,
  selectCurrentProject,
  selectProjectUsers,
} from '../redux/selectors/selectors'
import { deleteProject, setProjectId } from '../redux/slices/projectsSlice'
import { setTaskId } from '../redux/slices/tasksSlice'
import AddUserIcon from '../components/UIComponents/AddUserIcon'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import EditIcon from '../components/UIComponents/EditIcon'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import CreateTaskIcon from '../components/UIComponents/CreateTaskIcon'
import { memo } from 'react'
import InfoHeader from '../components/UIComponents/InfoHeader'
import Loader from '../components/UIComponents/Loader'
import TaskItem from '../components/TasksComponents/TaskItem'

const RenderUserItem = memo(({ user }) => {
  const navigation = useNavigation()

  const goToProjectUser = () => {
    navigation.navigate('ProjectUser')
  }

  return (
    <Box px='2'>
      <Pressable onPress={() => console.log(user.id)}>
        <UserAvatar username={user.username} size='lg' />
      </Pressable>
    </Box>
  )
})

const UsersList = () => {
  const users = useSelector(selectProjectUsers)

  return (
    <Box>
      <Text>Users - {users?.length}</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <RenderUserItem user={item} />}
        horizontal
        backgroundColor='red.400'
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  )
}

const RenderTaskItem = memo(({ task }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const goToTaskInfo = () => {
    dispatch(setTaskId(task.id))
    navigation.navigate('TaskInfo')
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

  useEffect(() => {
    dispatch(setProjectId(route.params.projectId))
    dispatch(fetchTasks())
  }, [])

  // const goToProjectUsers = () => {
  //   navigation.navigate('ProjectUsers')
  // }

  const goToAddUser = () => {
    navigation.navigate('AddUser')
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
        <EditIcon />
      </HStack>
      <InfoHeader title={project?.title} description={project?.description} />
      <UsersList />
      <ProjectTasks />
    </Box>
  )
}

export default ProjectInfoScreen
