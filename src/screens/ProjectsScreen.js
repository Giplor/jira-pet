import { Center, Box, Text, Button } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import { handleLogOut } from '../redux/slices/signInSlice'
import { useDispatch } from 'react-redux'

const ProjectsScreen = () => {
  const token = useSelector((state) => state.tokens)
  const dispatch = useDispatch()
  return (
    <Center width='100%' safeArea>
      <Box>
        <Text>{token.accessToken}</Text>
        <Button onPress={() => dispatch(handleLogOut())}>Log out</Button>
      </Box>
    </Center>
  )
}

export default ProjectsScreen
