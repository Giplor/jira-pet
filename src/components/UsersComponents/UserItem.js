import { HStack, Text, Pressable } from 'native-base'
import UserAvatar from './UserAvatar'

const UserItem = ({ username, size, onPress }) => {
  return (
    <Pressable width='100%' p='2' onPress={onPress}>
      <HStack alignItems='center' py={2}>
        <UserAvatar username={username} size={size} />
        <Text pl={2}>{username}</Text>
      </HStack>
    </Pressable>
  )
}

export default UserItem
