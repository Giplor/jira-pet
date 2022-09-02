import { FormControl, Input, WarningOutlineIcon } from 'native-base'

const FormInput = ({ label, value, setValue }) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input value={value} onChangeText={setValue} />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        Error
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default FormInput
