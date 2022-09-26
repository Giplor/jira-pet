import { SectionList, Text } from 'native-base'
import { useSelector } from 'react-redux'
import { projectInfo } from '../../redux/selectors/selectors'
import TaskItem from '../TasksComponents/TaskItem'
import UserItem from '../UsersComponents/UserItem'

const ProjectInfoList = () => {
  const projectData = useSelector(projectInfo)

  const ConditionRender = ({ projectData, title }) => {
    if (title === 'Tasks') {
      return <TaskItem task={projectData} />
    } else if (title === 'Developers') {
      return <UserItem user={projectData} />
    }
  }

  const HeaderSection = ({ title }) => {
    return <Text fontSize='3xl'>{title}</Text>
  }

  return (
    <SectionList
      sections={projectData}
      keyExtractor={(item) => item.id}
      renderItem={({ section, item }) => (
        <ConditionRender projectData={item} title={section.title} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <HeaderSection title={title} />
      )}
    />
  )
}

export default ProjectInfoList
