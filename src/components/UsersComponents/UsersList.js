import { Box, FlatList, View } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserItem from './UserItem'
import { fetchUsers } from '../../redux/slices/usersSlice'

const UsersList = () => {
  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Box width='100%' height='45%'>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={5}
      />
    </Box>
  )
}

export default UsersList
