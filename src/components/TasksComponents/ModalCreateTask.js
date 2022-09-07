import { Button, FormControl, Input, Modal, VStack } from 'native-base'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewTask } from '../../redux/slices/tasksSlice'

const ModalCreateTask = () => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(createNewTask({ title, description }))
    setShowModal(false)
  }

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Create new task</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create new task</Modal.Header>
          <Modal.Body>
            <VStack justifyContent='space-between' space='4'>
              <FormControl>
                <FormControl.Label>Title</FormControl.Label>
                <Input value={title} onChangeText={(text) => setTitle(text)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Description</FormControl.Label>
                <Input
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                />
              </FormControl>
            </VStack>
            <Modal.Footer>
              <Button onPress={addTask}>Create</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default ModalCreateTask
