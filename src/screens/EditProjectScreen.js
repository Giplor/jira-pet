import { Box, Text } from 'native-base'
import { useSelector } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import { useValidation } from '../hooks/useValidation'
import { selectCurrentProject } from '../redux/selectors/selectors'

const EditProjectScreen = () => {
  const project = useSelector(selectCurrentProject)

  const title = useValidation(project.title, 'Title')
  const description = useValidation(project.description, 'Description')

  return (
    <Box width='100%' safeArea>
      <DefaultInput value={title.value} label='Title' />
      <DefaultInput value={description.value} label='Description' />
      <Text>asfsdsdpkgpsdkg</Text>
    </Box>
  )
}

export default EditProjectScreen
