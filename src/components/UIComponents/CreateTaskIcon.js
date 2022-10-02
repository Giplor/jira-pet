import { Icon, IconButton } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const CreateTaskIcon = ({ onPress }) => {
  return (
    <IconButton
      icon={<Icon as={AntDesign} name='addfile' />}
      size='md'
      onPress={onPress}
    />
  )
}

export default CreateTaskIcon
