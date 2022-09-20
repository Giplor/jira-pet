import { HStack, Pressable, Text } from 'native-base'
import UserAvatar from './UserAvatar'

const UserItem = ({ user }) => {
  return (
    <Pressable>
      <HStack alignItems='center' py={2} px={5}>
        <UserAvatar avatar={user.avatar} />
        <Text pl={4}>{user.username}</Text>
      </HStack>
    </Pressable>
  )
}

export default UserItem
