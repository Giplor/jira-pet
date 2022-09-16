import { HStack, Text } from 'native-base'
import UserAvatar from './UserAvatar'

const UserItem = ({ users }) => {
  return (
    <HStack alignItems='center' py={2} px={5}>
      <UserAvatar avatar={users.avatar} />
      <Text pl={4}>{users.username}</Text>
    </HStack>
  )
}

export default UserItem
