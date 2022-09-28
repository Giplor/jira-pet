import { useNavigation } from '@react-navigation/native'
import { Text, Box, HStack, VStack, Pressable } from 'native-base'
import { setProjectId } from '../../redux/slices/tasksSlice'
import { useDispatch } from 'react-redux'
import ThreeDots from '../UIComponents/ThreeDots'

const ProjectItem = ({ project }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const openProjectInfo = () => {
    dispatch(setProjectId(project.id))
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
            <ThreeDots />
          </HStack>
          <Text color='coolGray.700'>{project.description}</Text>
        </VStack>
      </Box>
    </Pressable>
  )
}

export default ProjectItem
