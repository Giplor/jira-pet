import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import DefaultInput from '../components/UIComponents/DefaultInput'
import { useDispatch, useSelector } from 'react-redux'
import { useValidation } from '../hooks/useValidation'
import { createNewProject } from '../redux/slices/projectsSlice'

const CreateNewProjectScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const title = useValidation()
  const description = useValidation()
  const loading = useSelector((state) => state.projects.isLoading)

  const goToProjectsScreen = () => {
    navigation.navigate('Main', { screen: 'Projects' })
  }

  const createProject = () => {
    dispatch(
      createNewProject({
        title: title.value,
        description: description.value,
        callback: goToProjectsScreen,
      })
    )
  }

  return (
    <Box width='100%' maxWidth='260' safeArea>
      <Center width='80%'>
        <VStack justifyContent='space-between' space='3'>
          <DefaultInput
            value={title.value}
            setValue={(text) => title.onChange(text)}
            onBlur={title.onBlur}
            errorMessage={title.errorMessage}
            label='Title'
          />
          <DefaultInput
            value={description.value}
            setValue={(text) => description.onChange(text)}
            onBlur={description.onBlur}
            errorMessage={description.errorMessage}
            label='Description'
          />
          <Button
            onPress={createProject}
            isDisabled={!title.isValid || !description.isValid}
            isLoading={loading}
          >
            Create project
          </Button>
        </VStack>
      </Center>
    </Box>
  )
}

export default CreateNewProjectScreen
