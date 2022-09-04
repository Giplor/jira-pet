import { Button } from 'native-base'

const FormButton = ({ title, onSubmit }) => {
  return (
    <Button mt={2} colorScheme='indigo' onPress={onSubmit}>
      {title}
    </Button>
  )
}

export default FormButton
