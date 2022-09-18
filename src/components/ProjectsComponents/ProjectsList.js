import { Box, FlatList, View } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../redux/slices/projectsSlice'
import ProjectItem from './ProjectItem'
import { useNavigation } from '@react-navigation/native'

const ProjectsList = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const projects = useSelector((state) => state.projects.projects)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchProjects())
    })
    return unsubscribe
  }, [navigation])

  return (
    <Box width='100%' height='80%'>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectItem project={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default ProjectsList
