import { Box, Heading, Text } from 'native-base'

const InfoHeader = ({ title, description }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Box width='100%' height='10%' maxHeight='70'>
        <Text>{description}</Text>
      </Box>
    </>
  )
}

export default InfoHeader
