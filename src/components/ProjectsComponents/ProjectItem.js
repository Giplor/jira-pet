import { useNavigation } from '@react-navigation/native'
import { Text, Box, HStack, VStack, Center, Pressable } from 'native-base'
import { setProjectId } from '../../redux/slices/tasksSlice'
import {useDispatch} from 'react-redux'

const ProjectItem = ({ item }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable onPress={{
      () => navigation.navigate('Tasks'),
      dispatch(setProjectId(item.))
      }}>
      <Center>
        <Box
          width='80%'
          borderBottomWidth={1}
          pl={['0', '4']}
          pr={['0', '5']}
          py='2'
        >
          <HStack justifyContent='space-between' space={[2, 3]}>
            <VStack>
              <Text fontSize='xl' bold>
                {item.title}
              </Text>
              <Text color='coolGray.700'>{item.description}</Text>
            </VStack>
            <Text>Tasks: {item.task_count}</Text>
          </HStack>
        </Box>
      </Center>
    </Pressable>
  )
}

export default ProjectItem
