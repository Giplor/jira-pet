import { Icon, IconButton } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const AddUserIcon = ({ onPress }) => {
  return (
    <IconButton
      icon={<Icon as={AntDesign} name='adduser' />}
      size='md'
      onPress={onPress}
    />
  )
}

export default AddUserIcon
