import { FormControl, Input, WarningOutlineIcon } from 'native-base'

const FormInput = ({ label, value }) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        Error
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default FormInput
