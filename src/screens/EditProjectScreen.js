import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import { useValidation } from '../hooks/useValidation'
import { selectCurrentProject } from '../redux/selectors/selectors'
import { editProject } from '../redux/slices/projectsSlice'

const EditProjectScreen = () => {
  const dispatch = useDispatch()
  const project = useSelector(selectCurrentProject)
  const navigation = useNavigation()
  const loading = useSelector((state) => state.projects.isLoading)

  const title = useValidation(project.title)
  const description = useValidation(project.description)

  const submitEditProject = () => {
    dispatch(
      editProject({
        projectId: project.id,
        title: title.value,
        description: description.value,
        callback: () => navigation.navigate('Main', 'ProjectInfo'),
      })
    )
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <VStack justifyContent='space-between' space='3'>
          <DefaultInput
            value={title.value}
            setValue={(text) => title.onChange(text)}
            onBlur={title.onBlur}
            label='Title'
          />
          <DefaultInput
            value={description.value}
            setValue={(text) => description.onChange(text)}
            onBlur={description.onBlur}
            label='Description'
          />
          <Button
            onPress={submitEditProject}
            isDisabled={!title.value || !description.value}
            isLoading={loading}
          >
            Update project
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default EditProjectScreen
