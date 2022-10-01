import { Box, Button, FlatList, HStack, Text } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllUsers,
  selectCurrentProjectId,
  selectUsersNotInProject,
} from '../redux/selectors/selectors'
import { fetchUsers } from '../redux/slices/usersSlice'
import { addUserToProject } from '../redux/slices/projectsSlice'
import { memo } from 'react'

const RenderUserItem = memo(({ user, projectId }) => {
  const dispatch = useDispatch()

  const addUser = () => {
    dispatch(addUserToProject({ userId: user.id, projectId }))
  }

  return (
    <Box width='80%' borderBottomWidth={1} py='4'>
      <HStack justifyContent='space-between'>
        <Text>{user.username}</Text>
        <Button onPress={addUser}>Press</Button>
      </HStack>
    </Box>
  )
})

const UsersList = ({ data }) => {
  const projectId = useSelector(selectCurrentProjectId)
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderUserItem user={item} projectId={projectId} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={1}
    />
  )
}

const AddUserScreen = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsersNotInProject)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Box flex={1} safeArea>
      <UsersList data={users} />
    </Box>
  )
}

export default AddUserScreen
