import { SectionList, Text } from 'native-base'

const ProjectInfoList = () => {
  const DATA = [
    {
      title: 'Aboba title',
      data: [
        { id: 5, desc: 'cool' },
        { id: 6, desc: 'ccccc' },
      ],
    },
    {
      title: 'Chu title',
      data: [
        { id: 1, username: 'Prekol' },
        { id: 2, username: 'Another prekol' },
      ],
    },
  ]

  const ConditionRender = ({ dataInfo, title }) => {
    console.log(title)
    if (title === 'Aboba title') {
      return <Text>{dataInfo.desc}</Text>
    } else if (title === 'Chu title') {
      return <Text>{dataInfo.username}</Text>
    }
  }
  const HeaderSection = ({ title }) => {
    return <Text fontSize='5xl'>{title}</Text>
  }

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ section, item }) => (
        <ConditionRender dataInfo={item} title={section.title} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <HeaderSection title={title} />
      )}
    />
  )
}

export default ProjectInfoList
