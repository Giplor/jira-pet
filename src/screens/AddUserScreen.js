import { Box, Button, FlatList, HStack, Text } from 'native-base'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentProjectId,
  selectUsersNotInProject,
} from '../redux/selectors/selectors'
import { fetchUsers } from '../redux/slices/usersSlice'
import { addUserToProject } from '../redux/slices/projectsSlice'
import { memo } from 'react'

const RenderUserItem = memo(({ user, projectId }) => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)

  const addUser = () => {
    setLoading(true)
    dispatch(addUserToProject({ userId: user.id, projectId }))
  }

  return (
    <Box width='80%' borderBottomWidth={1} py='4'>
      <HStack justifyContent='space-between'>
        <Text>{user.username}</Text>
        <Button onPress={addUser} isLoading={isLoading}>
          Add
        </Button>
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
