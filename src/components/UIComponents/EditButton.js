import { Box, IconButton, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

const EditButton = ({ onPress }) => {
  return (
    <Box alignItems='center'>
      <IconButton
        icon={<Icon as={AntDesign} name='edit' />}
        size='md'
        onPress={onPress}
      />
    </Box>
  )
}

export default EditButton
