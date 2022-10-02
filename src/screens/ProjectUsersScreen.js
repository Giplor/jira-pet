import { Box, Text, Center, HStack, VStack, FlatList } from 'native-base'
import { selectProjectUsers } from '../redux/selectors/selectors'
import { useSelector } from 'react-redux'
import UserAvatar from '../components/UsersComponents/UserAvatar'
import { memo } from 'react'

const RenderUserItem = memo(({ user }) => {
  return (
    <Center py='2' width='100%'>
      <Box width='80%' rounded='lg' p='2' borderBottomWidth={1}>
        <HStack justifyContent='space-between' alignItems='flex-end'>
          <VStack flex={1}>
            <Text>{user.username}</Text>
          </VStack>
          <UserAvatar size='sm' username={user.username} />
        </HStack>
      </Box>
    </Center>
  )
})

const ProjectUsersScreen = () => {
  const users = useSelector(selectProjectUsers)

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <RenderUserItem user={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ProjectUsersScreen
