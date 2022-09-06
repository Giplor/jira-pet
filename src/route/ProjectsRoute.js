import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectsScreen from '../screens/ProjectsScreen'
import TasksScreen from '../screens/TasksScreen'

const Stack = createNativeStackNavigator()

const ProjectsRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Projects' component={ProjectsScreen} />
      <Stack.Screen name='Tasks' component={TasksScreen} />
    </Stack.Navigator>
  )
}

export default ProjectsRoute
