import { Center, Box, Text, FlatList, HStack, Button, Heading } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, selectCurrentProjectId } from '../redux/selectors/selectors'
import { fetchUsers } from '../redux/slices/usersSlice'
import { addUserToProject } from '../redux/slices/projectsSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'

const RenderItem = ({ user, projectId, dispatch }) => {
  const addUser = () => {
    console.log(user.id)
    dispatch(addUserToProject({ userId: user.id, projectId }))
  }
  return (
    <Box width='100%'>
      <HStack justifyContent='space-between' alignItems='center' py={3}>
        <HStack justifyContent='space-between' alignItems='center'>
          <UserAvatar />
          <Text pl={4}>{user.username}</Text>
        </HStack>
        <Button onPress={addUser} width='20' height='6'>
          ADD
        </Button>
      </HStack>
    </Box>
  )
}

const AddUserScreen = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const projectId = useSelector(selectCurrentProjectId)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Center width='100%' height='100%' safeArea>
      <Box width='80%' height='100%'>
        <Heading>Add user</Heading>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <RenderItem user={item} projectId={projectId} dispatch={dispatch} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
        />
      </Box>
    </Center>
  )
}

export default AddUserScreen
