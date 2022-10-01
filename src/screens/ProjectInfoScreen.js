import { Box, Heading, HStack, Text, VStack, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentProject } from '../redux/selectors/selectors'
import { deleteProject } from '../redux/slices/projectsSlice'
import AddUserIcon from '../components/UIComponents/AddUserIcon'
import DeleteIcon from '../components/UIComponents/DeleteIcon'
import EditIcon from '../components/UIComponents/EditIcon'
import ProjectUsers from '../components/ProjectUsers'
import ProjectTasks from '../components/ProjectTasks'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useEffect } from 'react'
import { fetchTasks } from '../redux/slices/tasksSlice'

const ProjectInfoTab = createMaterialTopTabNavigator()

const ProjectInfoTabScreen = () => {
  return (
    <ProjectInfoTab.Navigator screenOptions={{}}>
      <ProjectInfoTab.Screen
        name='TasksProject'
        component={ProjectTasks}
        options={{ tabBarLabel: 'Tasks' }}
      />
      <ProjectInfoTab.Screen
        name='ProjectUsers'
        component={ProjectUsers}
        options={{ tabBarLabel: 'Users' }}
      />
    </ProjectInfoTab.Navigator>
  )
}

const ProjectInfoScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const project = useSelector(selectCurrentProject)

  useEffect(() => dispatch(fetchTasks()))

  const goToAddUser = () => {
    navigation.navigate('AddUser')
  }

  const goToEditProject = () => {
    navigation.navigate('EditProject')
  }

  const deleteThisProject = () => {
    navigation.navigate('Projects')
    dispatch(deleteProject(project.id))
  }

  return (
    <Box flex={1} safeArea>
      <HStack alignSelf='flex-end' alignItems='center'>
        <AddUserIcon onPress={goToAddUser} />
        <DeleteIcon onPress={deleteThisProject} />
        <EditIcon onPress={goToEditProject} />
      </HStack>
      <Heading>{project.title}</Heading>
      <Box width='100%' height='10%' maxHeight='70'>
        <Text>{project.description}</Text>
      </Box>
      <ProjectInfoTabScreen />
    </Box>
  )
}

export default ProjectInfoScreen
