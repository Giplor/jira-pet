import { Modal, Button } from 'native-base'
import { useState } from 'react'
import DefaultInput from './DefaultInput'
import { useValidation } from '../../hooks/useValidation'

const ModalRename = ({ title, description, onSubmit }) => {
  const [showModal, setShowModal] = useState(false)
  const [changeTitle, setChangeTitle] = useState(title)
  const [changeDescription, setChangeDescription] = useState(description)

  const closeModal = () => {
    setShowModal(false)
    setChangeTitle(title)
    setChangeDescription(description)
  }

  return (
    <>
      <Button onPress={() => setShowModal(true)}>RENAME</Button>
      <Modal isOpen={showModal} onClose={closeModal}>
        <Modal.Content maxWidth='400px'>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <DefaultInput
              value={changeTitle}
              setValue={(text) => setChangeTitle(text)}
              label='Title'
            />
            <DefaultInput
              value={changeDescription}
              setValue={(text) => setChangeDescription(text)}
              label='Description'
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant='ghost' colorScheme='blueGray' onPress={closeModal}>
                Cancel
              </Button>
              <Button
                onPress={onSubmit}
                isDisabled={!changeTitle || !changeDescription}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default ModalRename
