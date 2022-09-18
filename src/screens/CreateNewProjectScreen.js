import { useNavigation } from '@react-navigation/native'
import { Box, Button, FormControl, Input, VStack } from 'native-base'

const CreateNewProjectScreen = () => {
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
        <Button onPress={() => navigation.navigate('ProjectsScreen')}>
          Create project
        </Button>
      </VStack>
    </Box>
  )
}

export default CreateNewProjectScreen
