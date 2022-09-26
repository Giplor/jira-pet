import { Box, Heading, Fab, Icon, HStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import EditButton from '../components/UIComponents/EditButton'
import { useDispatch, useSelector } from 'react-redux'
import { projectInfo, selectCurrentProject } from '../redux/selectors/selectors'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'

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

  return (
    <Box width='80%' height='100%' safeArea>
      <HStack alignItems='center' justifyContent='space-between'>
        <Heading>{project.title}</Heading>
        <EditButton onPress={goToEditProject} />
      </HStack>
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
