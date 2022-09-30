import { Box, Center, Text, VStack, Button, HStack } from 'native-base'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from '../redux/slices/userSlice'
import UserAvatar from '../components/UsersComponents/UserAvatar'

const CurrentUserScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  const currentUser = useSelector((state) => state.user.user)
  return (
    <Center width='100%' height='100%' safeArea>
      <Box width='90%'>
        <HStack justifyContent='space-between'>
          <VStack alignItems='flex-start'>
            <UserAvatar size='xl' username={currentUser?.username} />
            <Text bold>{currentUser?.username}</Text>
          </VStack>
          <Box>
            <Button size='sm' onPress={() => dispatch(handleLogOut())}>
              Log out
            </Button>
          </Box>
        </HStack>
      </Box>
    </Center>
  )
}

export default CurrentUserScreen
