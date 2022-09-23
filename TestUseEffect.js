import { Center, Box, Input, FormControl, Button } from 'native-base'
import { useUseValidation } from './useUseValidation'

const TestUseEffect = () => {
  const email = useUseValidation('', 'isEmail')
  const password = useUseValidation()
  console.log('TestUseEffect')

  return (
    <Center>
      <Box width='80%' safeArea>
        <FormControl isInvalid={email.errorMessage}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            value={email.value}
            onChangeText={(text) => email.onChange(text)}
            onBlur={email.onBlur}
          />
          <FormControl.ErrorMessage>{email.errorMessage}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={password.errorMessage}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            value={password.value}
            onChangeText={(text) => password.onChange(text)}
            onBlur={password.onBlur}
          />
          <FormControl.ErrorMessage>
            {password.errorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button isDisabled={!email.isValid || !password.isValid}>SUBMIT</Button>
      </Box>
    </Center>
  )
}

export default TestUseEffect
