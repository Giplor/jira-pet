import { Avatar } from 'native-base'

const UserAvatar = ({ avatar }) => {
  if (avatar) {
    return <Avatar source={{ uri: avatar }} />
  }
  return (
    <Avatar>Fo</Avatar>
    // <Avatar
    //   source={{
    //     uri: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg',
    //   }}
    // />
  )
}

export default UserAvatar
