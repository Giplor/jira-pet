import { Box, HStack, Pressable, VStack, Text } from 'native-base'
import UserAvatar from '../UsersComponents/UserAvatar'

const TaskItem = ({ onPress, title, description, username }) => {
  return (
    <Pressable py='2' width='100%' onPress={onPress}>
      <Box width='80%' rounded='lg' p='2' borderBottomWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <VStack flex={1}>
            <Text bold>{title}</Text>
            <Text>{description}</Text>
          </VStack>
          <UserAvatar size='sm' username={username} />
        </HStack>
      </Box>
    </Pressable>
  )
}

export default TaskItem
