import { Center, Box, Text, FlatList, HStack, Button, Heading } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, selectCurrentProject } from '../redux/selectors/selectors'
import { fetchUsers } from '../redux/slices/usersSlice'
import { addUserToProject } from '../redux/slices/projectsSlice'
import { useState } from 'react'

const AddUserButton = ({ projectId, dispatch, user }) => {
  const [isDisabled, setDisabled] = useState(false)

  const addUser = () => {
    console.log(user.id)
    dispatch(addUserToProject({ userId: user.id, projectId }))
    setDisabled(true)
  }
  return (
    <Button isDisabled={isDisabled} onPress={addUser} height='10'>
      ADD
    </Button>
  )
}

const RenderItem = ({ user, projectId, dispatch }) => {
  return (
    <Box width='100%'>
      <HStack justifyContent='space-between' alignItems='center'>
        <Text my='5'>{user.username}</Text>
        <AddUserButton projectId={projectId} dispatch={dispatch} user={user} />
      </HStack>
    </Box>
  )
}

const AddUserScreen = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const project = useSelector(selectCurrentProject)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  console.log('render')
  return (
    <Center width='100%' height='100%' safeArea>
      <Box width='80%' height='100%'>
        <Heading>Add user to {project.title}</Heading>
        <Text>Choice user:</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <RenderItem user={item} projectId={project.id} dispatch={dispatch} />
          )}
          keyExtractor={(item) => item.id}
          maxToRenderPerBatch={10}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Center>
  )
}

export default AddUserScreen
