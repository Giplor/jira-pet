import { Box, Button, Heading, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import EditButton from '../components/UIComponents/EditButton'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentProject } from '../redux/selectors/selectors'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'

const ProjectInfoScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)

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
      <Button onPress={() => navigation.navigate('AddUser')}>ADD USER</Button>
    </Box>
  )
}

export default ProjectInfoScreen
