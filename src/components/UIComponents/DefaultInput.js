import { FormControl, Input, WarningOutlineIcon } from 'native-base'

const DefaultInput = ({
  value,
  setValue,
  onBlur,
  errorMessage,
  label,
  multiline = false,
}) => {
  return (
    <FormControl isInvalid={errorMessage}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        multiline={multiline}
        value={value}
        onChangeText={setValue}
        onBlur={onBlur}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default DefaultInput
