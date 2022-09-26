import {
  Box,
  Heading,
  Fab,
  Icon,
  IconButton,
  HStack,
  SectionList,
  Text,
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import EditButton from '../components/UIComponents/EditButton'
import { useDispatch, useSelector } from 'react-redux'
import { projectInfo, selectCurrentProject } from '../redux/selectors/selectors'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'
import UserItem from '../components/UsersComponents/UserItem'
import TaskItem from '../components/TasksComponents/TaskItem'

const ProjectInfoScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)
  const dataProject = useSelector(projectInfo)

  const goToEditProject = () => {
    navigation.navigate('EditProject')
  }

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  const RenderItem = ({ info }) => {
    if (info.username) {
      return <UserItem user={info} />
    } else if (info.description) {
      return <TaskItem task={info} />
    }
  }

  return (
    <Box width='80%' height='100%' safeArea>
      <HStack alignItems='center' justifyContent='space-between'>
        <Heading>{project.title}</Heading>
        <EditButton onPress={goToEditProject} />
      </HStack>
      <IconButton icon={<Icon as={AntDesign} name='adduser' size='2xl' />} />
      <SectionList
        sections={dataProject}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <RenderItem info={item} />}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
      <Fab
        renderInPortal={false}
        icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
        placement='bottom-right'
        onPress={() => navigation.navigate('CreateNewTask')}
      />
    </Box>
  )
}

export default ProjectInfoScreen
