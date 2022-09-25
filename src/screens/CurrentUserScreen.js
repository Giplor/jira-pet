import { Box, Center, FlatList, Text, VStack, Button } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from '../redux/slices/userSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import { selectUserProjects } from '../redux/selectors/selectors'
import ProjectsList from '../components/ProjectsComponents/ProjectsList'

const CurrentUserScreen = () => {
  const dispatch = useDispatch()
  const projects = useSelector(selectUserProjects)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  const currentUser = useSelector((state) => state.user.user)
  return (
    <Center width='100%' height='90%' safeArea>
      <Box width='80%'>
        <VStack alignItems='center'>
          <UserAvatar />
          <Text>{currentUser?.username}</Text>
          <Text>{currentUser?.email}</Text>
          <ProjectsList data={projects} />
        </VStack>
      </Box>
    </Center>
  )
}

export default CurrentUserScreen
