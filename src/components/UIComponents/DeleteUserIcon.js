import { Icon, IconButton } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const DeleteUserIcon = () => {
  return (
    <IconButton
      icon={<Icon as={AntDesign} name='deleteuser' />}
      size='md'
      onPress={onPress}
    />
  )
}

export default DeleteUserIcon
