import { HStack, Pressable, Text } from 'native-base'
import UserAvatar from './UserAvatar'

const UserItem = ({ user }) => {
  return (
    <HStack alignItems='center' py={2}>
      <UserAvatar />
      <Text pl={4}>{user.username}</Text>
    </HStack>
  )
}

export default UserItem
