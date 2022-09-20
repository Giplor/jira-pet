import { useNavigation } from '@react-navigation/native'
import { Box, Button, FormControl, Input, Text, VStack } from 'native-base'
import UsersList from '../components/UsersComponents/UsersList'

const CreateNewTaskScreen = () => {
  const navigation = useNavigation()

  return (
    <Box width='100%' safeArea>
      <VStack justifyContent='space-between' space='5'>
        <FormControl>
          <FormControl.Label>Title</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Description</FormControl.Label>
          <Input />
        </FormControl>
        <Button
          onPress={() =>
            navigation.navigate('Main', { screen: 'ProjectInfoScreen' })
          }
        >
          Create task
        </Button>
      </VStack>
      <Text>Selected user: </Text>
      <UsersList />
    </Box>
  )
}

export default CreateNewTaskScreen
