import { Avatar } from 'native-base'

const UserAvatar = ({ size = 'md', username }) => {
  return <Avatar size={size}>{username?.toUpperCase().slice(0, 2)}</Avatar>
}

export default UserAvatar
