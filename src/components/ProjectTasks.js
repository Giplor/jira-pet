import { FlatList, Pressable, Box, HStack, VStack, Text } from 'native-base'
import UserAvatar from './UsersComponents/UserAvatar'
import { useSelector } from 'react-redux'
import { selectAllProjectTasks } from '../redux/selectors/selectors'
import { useNavigation } from '@react-navigation/native'

const RenderTaskItem = ({ task }) => {
  const navigation = useNavigation()

  const goToTaskInfo = () => {
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
    <FlatList
      data={tasks}
      renderItem={({ item }) => <RenderTaskItem task={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ProjectTasks
