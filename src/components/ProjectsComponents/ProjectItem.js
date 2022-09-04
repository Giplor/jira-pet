import { Text, Box, HStack, VStack, Center } from 'native-base'

const ProjectItem = ({ item }) => {
  return (
    <Center>
      <Box width='80%' borderBottomWidth={1} pl={['0', '4']} pr={['0', '5']} py='2'>
        <HStack justifyContent='space-between' space={[2, 3]}>
          <VStack>
            <Text fontSize='xl' bold>
              {item.title}
            </Text>
            <Text color='coolGray.700'>{item.description}</Text>
          </VStack>
          <Text>Tasks: {item.task_count}</Text>
        </HStack>
      </Box>
    </Center>
  )
}

export default ProjectItem
