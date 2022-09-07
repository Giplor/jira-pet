import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectsScreen from '../screens/ProjectsScreen'
import TasksScreen from '../screens/TasksScreen'
import UsersScreen from '../screens/UsersScreen'

const Stack = createNativeStackNavigator()

const ProjectsRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Projects' component={ProjectsScreen} />
      <Stack.Screen name='Tasks' component={TasksScreen} />
      <Stack.Screen name='Users' component={UsersScreen} />
    </Stack.Navigator>
  )
}

export default ProjectsRoute
