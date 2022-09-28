import { Actionsheet, Icon, IconButton, useDisclose } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ThreeDots = () => {
  const { isOpen, onClose, onOpen } = useDisclose()

  return (
    <>
      <IconButton
        icon={<Icon as={MaterialCommunityIcons} name='dots-vertical' />}
        borderRadius='full'
        onPress={onOpen}
      />
      <Actionsheet isOpen={isOpen} onClose={onClose} size='full'>
        <Actionsheet.Content alignItems='center'>
          <Actionsheet.Item
            startIcon={
              <Icon as={MaterialCommunityIcons} name='pencil-outline' size='6' />
            }
          >
            Edit
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon as={MaterialCommunityIcons} name='delete-outline' size='6' />
            }
          >
            Delete
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

export default ThreeDots
