import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectsScreen from '../screens/ProjectsScreen'

const Stack = createNativeStackNavigator()

const ProjectsRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Projects' component={ProjectsScreen} />
    </Stack.Navigator>
  )
}

export default ProjectsRoute
