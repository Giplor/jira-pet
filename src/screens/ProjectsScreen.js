import { Box, Button, KeyboardAvoidingView } from 'native-base'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { handleLogOut } from '../redux/slices/signInSlice'
import { fetchProjects } from '../redux/slices/projectsSlice'
import { useDispatch } from 'react-redux'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'
import ModalCreateProject from '../components/ProjectsComponents/ModalCreateProject'

const ProjectsScreen = () => {
  const [showModal, setShowModal] = useState(false)
  const projects = useSelector((state) => state.projects.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <Box safeArea>
      <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      <ProjectsList projects={projects} />
      <ModalCreateProject show={showModal} setShow={setShowModal} />
      <Button onPress={() => setShowModal(true)}>show modal</Button>
    </Box>
  )
}

export default ProjectsScreen
