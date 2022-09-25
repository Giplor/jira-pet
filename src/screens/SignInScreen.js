import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack, useToast } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import SecureInput from '../components/UIComponents/SecureInput'
import { useValidation } from '../hooks/useValidation'
import { signIn } from '../redux/slices/signInSlice'

const SignInScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.signIn.isLoading)
  const navigation = useNavigation()
  const email = useValidation('', 'isEmail')
  const password = useValidation('', 'isPassword')
  const toast = useToast()

  const handleError = (errorMessage) => {
    toast.show({
      description: errorMessage,
    })
  }

  const handleSignIn = () => {
    dispatch(
      signIn({ email: email.value, password: password.value, callback: handleError })
    )
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <VStack space='3'>
          <DefaultInput
            value={email.value}
            setValue={(text) => email.onChange(text)}
            onBlur={email.onBlur}
            errorMessage={email.errorMessage}
            label='Email'
          />
          <SecureInput
            value={password.value}
            setValue={(text) => password.onChange(text)}
            onBlur={password.onBlur}
            errorMessage={password.errorMessage}
          />
          <Button
            colorScheme='indigo'
            isDisabled={!email.isValid || !password.isValid}
            onPress={handleSignIn}
            isLoading={loading}
          >
            Sign in
          </Button>
          <Button isDisabled={loading} onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default SignInScreen
