import { Icon, IconButton, AlertDialog, Button, Center } from 'native-base'
import { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DeleteIcon = ({ onPress }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)

  return (
    <>
      <IconButton
        icon={<Icon as={MaterialCommunityIcons} name='delete-outline' />}
        size='md'
        onPress={() => {
          setIsOpen(true)
        }}
      />
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Body>Delete this item?</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant='unstyled' colorScheme='coolGray' onPress={onClose}>
                Cancel
              </Button>
              <Button colorScheme='danger' onPress={onPress}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  )
}

export default DeleteIcon
