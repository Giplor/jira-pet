import { Box } from 'native-base'

import ModalCreateTask from '../components/TasksComponents/ModalCreateTask'
import TasksList from '../components/TasksComponents/TasksList'

const TasksScreen = () => {
  return (
    <Box safeArea>
      <TasksList />
      <ModalCreateTask />
    </Box>
  )
}

export default TasksScreen
