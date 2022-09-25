import { Box, FlatList } from 'native-base'
import ProjectItem from './ProjectItem'

const ProjectsList = ({ data }) => {
  return (
    <Box width='100%' height='80%'>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProjectItem project={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}

export default ProjectsList
