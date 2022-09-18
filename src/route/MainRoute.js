import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectsScreen from '../screens/ProjectsScreen'
import ProjectInfoScreen from '../screens/ProjectInfoScreen'
import CurrentUserScreen from '../screens/CurrentUserScreen'
import CreateNewProjectScreen from '../screens/CreateNewProjectScreen'
import { Ionicons } from '@expo/vector-icons'
import CreateNewTaskScreen from '../screens/CreateNewTaskScreen'

const ProjectsStack = createNativeStackNavigator()

const ProjectsStackScreen = () => {
  return (
    <ProjectsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectsStack.Screen name='Projects' component={ProjectsScreen} />
      <ProjectsStack.Screen name='ProjectInfo' component={ProjectInfoScreen} />
    </ProjectsStack.Navigator>
  )
}

const UserStack = createNativeStackNavigator()

const UserStackScreen = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name='User' component={CurrentUserScreen} />
    </UserStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const TabRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName
          if (route.name === 'ProjectsScreen') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline'
          } else if (route.name === 'UserScreen') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <Ionicons name={iconName} size={25} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='ProjectsScreen' component={ProjectsStackScreen} />
      <Tab.Screen name='UserScreen' component={UserStackScreen} />
    </Tab.Navigator>
  )
}

const MainStack = createNativeStackNavigator()

const MainRoute = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='Main' component={TabRoute} />
      <MainStack.Screen name='CreateNewProject' component={CreateNewProjectScreen} />
      <MainStack.Screen name='CreateNewTask' component={CreateNewTaskScreen} />
    </MainStack.Navigator>
  )
}

export default MainRoute
