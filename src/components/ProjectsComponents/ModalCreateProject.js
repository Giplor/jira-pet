import { Modal, Input, FormControl, VStack, Button } from 'native-base'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewProject } from '../../redux/slices/projectsSlice'

const ModalCreateProject = ({ show, setShow }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const addProject = () => {
    dispatch(createNewProject({ title, description }))
    setShow(false)
  }

  return (
    <Modal isOpen={show} onClose={() => setShow(false)} avoidKeyboard>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Create project</Modal.Header>
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
  )
}

export default ModalCreateProject
