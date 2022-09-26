import { Box, Button, Center, Text, VStack } from 'native-base'
import { useSelector } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import { useValidation } from '../hooks/useValidation'
import { selectCurrentProject } from '../redux/selectors/selectors'

const EditProjectScreen = () => {
  const project = useSelector(selectCurrentProject)

  const title = useValidation(project.title, 'Title')
  const description = useValidation(project.description, 'Description')

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <VStack justifyContent='space-between' space='3'>
          <DefaultInput value={title.value} label='Title' />
          <DefaultInput value={description.value} label='Description' />
          <Button>Update project</Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default EditProjectScreen
