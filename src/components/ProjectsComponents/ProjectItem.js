import { useNavigation } from '@react-navigation/native'
import { Text, Box, HStack, VStack, Pressable, Center } from 'native-base'
import { setProjectId } from '../../redux/slices/tasksSlice'
import { useDispatch } from 'react-redux'

const ProjectItem = ({ project }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Center>
      <Pressable
        width='90%'
        onPress={() => {
          dispatch(setProjectId(project.id), navigation.navigate('Tasks'))
        }}
      >
        <Box borderBottomWidth={1} py='2'>
          <VStack>
            <HStack justifyContent='space-between'>
              <Text fontSize='xl' bold>
                {project.title}
              </Text>
              <Text>Tasks: {project.task_count}</Text>
            </HStack>
            <Text color='coolGray.700'>{project.description}</Text>
          </VStack>
        </Box>
      </Pressable>
    </Center>
  )
}

export default ProjectItem
