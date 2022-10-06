import { Box, Heading, Text } from 'native-base'

const InfoHeader = ({ title, description }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Box width='100%' height='100'>
        <Text color='coolGray.700'>Title</Text>
        <Text>{description}</Text>
      </Box>
    </>
  )
}

export default InfoHeader
