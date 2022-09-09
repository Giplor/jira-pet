import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectsScreen from '../screens/ProjectsScreen'
import ProjectInfoScreen from '../screens/ProjectInfoScreen'

const Stack = createNativeStackNavigator()

const ProjectsRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Projects' component={ProjectsScreen} />
        <Stack.Screen name='ProjectInfo' component={ProjectInfoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default ProjectsRoute
