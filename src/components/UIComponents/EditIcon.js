import { IconButton, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const EditIcon = ({ onPress }) => {
  return (
    <IconButton
      icon={<Icon as={AntDesign} name='edit' />}
      size='md'
      onPress={onPress}
    />
  )
}

export default EditIcon
