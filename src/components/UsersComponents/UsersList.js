import { Box, FlatList } from 'native-base'
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
    <Box wdth='100%' height='80%'>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem users={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default UsersList
