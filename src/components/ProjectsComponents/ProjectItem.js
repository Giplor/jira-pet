import { useNavigation } from '@react-navigation/native'
import { Text, Box, HStack, VStack, Pressable } from 'native-base'
import { setProjectId } from '../../redux/slices/tasksSlice'
import { useDispatch } from 'react-redux'

const ProjectItem = ({ project }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(setProjectId(project.id), navigation.navigate('Tasks'))
      }}
    >
      <Box width='80%' borderBottomWidth={1} pl={['0', '4']} pr={['0', '5']} py='2'>
        <HStack justifyContent='space-between' space={[2, 3]}>
          <VStack>
            <Text fontSize='xl' bold>
              {project.title}
            </Text>
            <Text color='coolGray.700'>{project.description}</Text>
          </VStack>
          <Text>Tasks: {project.task_count}</Text>
        </HStack>
      </Box>
    </Pressable>
  )
}

export default ProjectItem
