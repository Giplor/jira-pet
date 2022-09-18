import { Box, FlatList, View } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/slices/tasksSlice'
import TaskItem from './TaskItem'

const TasksList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <Box width='100%' height='70%'>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default TasksList
