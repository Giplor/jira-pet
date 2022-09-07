import { Box, Button } from 'native-base'
import { useState } from 'react'
import ModalCreateTask from '../components/TasksComponents/ModalCreateTask'
import TasksList from '../components/TasksComponents/TasksList'

const TasksScreen = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box safeArea>
      <TasksList />
      <ModalCreateTask show={showModal} setShow={setShowModal} />
      <Button onPress={() => setShowModal(true)}>Create new task</Button>
    </Box>
  )
}

export default TasksScreen
