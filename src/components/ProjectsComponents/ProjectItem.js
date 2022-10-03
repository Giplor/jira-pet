import { Box, HStack, Pressable, VStack, Text } from 'native-base'

const ProjectItem = ({ onPress, title, description, taskCount }) => {
  return (
    <Pressable
      width='100%'
      onPress={onPress}
      _pressed={{ backgroundColor: 'coolGray.200' }}
      _disabled={{ backgroundColor: 'red.500' }}
    >
      <Box borderBottomWidth={1} py='2'>
        <VStack>
          <HStack justifyContent='space-between'>
            <Text fontSize='xl' bold>
              {title}
            </Text>
            <Text>Tasks: {taskCount}</Text>
          </HStack>
          <Text color='coolGray.700'>{description}</Text>
        </VStack>
      </Box>
    </Pressable>
  )
}

export default ProjectItem
