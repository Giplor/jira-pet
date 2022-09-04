import { Box, FlatList } from 'native-base'
import ProjectItem from './ProjectItem'

const ProjectsList = ({ projects }) => {
  return (
    <Box width='100%' height='80%'>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default ProjectsList
