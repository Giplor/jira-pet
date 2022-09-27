import { Box, FlatList } from 'native-base'
import ProjectItem from './ProjectItem'

const ProjectsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProjectItem project={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ProjectsList
