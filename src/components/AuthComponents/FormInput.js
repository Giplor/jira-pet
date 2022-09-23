import { FormControl, Input, WarningOutlineIcon } from 'native-base'

const FormInput = ({ value, setValue, onBlur, errorMessage, label }) => {
  return (
    <>
      <FormControl isInvalid={errorMessage}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input value={value} onChangeText={setValue} onBlur={onBlur} />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    </>
  )
}

export default FormInput
