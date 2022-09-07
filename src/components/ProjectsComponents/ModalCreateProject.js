import { Modal, Input, FormControl, VStack, Button } from 'native-base'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewProject } from '../../redux/slices/projectsSlice'

const ModalCreateProject = () => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const addProject = () => {
    dispatch(createNewProject({ title, description }))
    setShowModal(false)
  }

  return (
    <>
      <Button onPress={() => setShowModal(true)}>Create new project</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create new project</Modal.Header>
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
              <Button onPress={addProject}>Create</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default ModalCreateProject
