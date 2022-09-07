import { Box, Button, Center } from 'native-base'
import { useState } from 'react'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import ModalCreateProject from '../components/ProjectsComponents/ModalCreateProject'

const ProjectsScreen = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  return (
    <Center>
      <Box width='100%' safeArea>
        <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
        <ProjectsList />
        <ModalCreateProject show={showModal} setShow={setShowModal} />
        <Button onPress={() => setShowModal(true)}>create new project</Button>
      </Box>
    </Center>
  )
}

export default ProjectsScreen
