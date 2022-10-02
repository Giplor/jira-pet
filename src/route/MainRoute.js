import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import ProjectsScreen from '../screens/ProjectsScreen'
import ProjectInfoScreen from '../screens/ProjectInfoScreen'
import EditProjectScreen from '../screens/EditProjectScreen'
import CreateNewProjectScreen from '../screens/CreateNewProjectScreen'
import CurrentUserScreen from '../screens/CurrentUserScreen'
import CreateNewTaskScreen from '../screens/CreateNewTaskScreen'
import AddUserScreen from '../screens/AddUserScreen'
import TaskInfoScreen from '../screens/TaskInfoScreen'
import ProjectUsersScreen from '../screens/ProjectUsersScreen'

const ProjectsStack = createNativeStackNavigator()

const ProjectsStackScreen = () => {
  return (
    <ProjectsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectsStack.Screen name='Projects' component={ProjectsScreen} />
      <ProjectsStack.Screen name='ProjectInfo' component={ProjectInfoScreen} />
      <ProjectsStack.Screen name='ProjectUsers' component={ProjectUsersScreen} />
      <ProjectsStack.Screen name='AddUser' component={AddUserScreen} />
      <ProjectsStack.Screen name='TaskInfo' component={TaskInfoScreen} />
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
      <MainStack.Screen name='EditProject' component={EditProjectScreen} />
      <MainStack.Screen name='CreateNewProject' component={CreateNewProjectScreen} />
      <MainStack.Screen name='CreateNewTask' component={CreateNewTaskScreen} />
    </MainStack.Navigator>
  )
}

export default MainRoute
