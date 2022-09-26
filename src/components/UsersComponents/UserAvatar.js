import { Avatar } from 'native-base'

const UserAvatar = ({ size = 'md' }) => {
  return (
    <Avatar
      size={size}
      source={{
        uri: 'https://a.pinatafarm.com/620x620/e469f8356a/smiling-cat.jpg',
      }}
    />
  )
}

export default UserAvatar
