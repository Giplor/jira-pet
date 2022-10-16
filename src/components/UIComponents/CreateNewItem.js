import { Fab, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const CreateNewItem = ({ onPress }) => {
  return (
    <Fab
      renderInPortal={false}
      icon={<Icon color='white' as={AntDesign} name='plus' size='xl' />}
      placement='bottom-right'
      onPress={onPress}
    />
  )
}

export default CreateNewItem
