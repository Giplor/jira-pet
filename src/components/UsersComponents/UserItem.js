import { HStack, Text } from 'native-base'
import UserAvatar from './UserAvatar'

const UserItem = ({ username, size }) => {
  return (
    <HStack alignItems='center' py={2}>
      <UserAvatar username={username} size={size} />
      <Text pl={2}>{username}</Text>
    </HStack>
  )
}

export default UserItem
