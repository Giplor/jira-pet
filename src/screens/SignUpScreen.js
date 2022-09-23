import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../components/AuthComponents/FormInput'
import FormInputPassword from '../components/AuthComponents/FormInputPassword'
import { useValidation } from '../hooks/useValidation'
import { signUp } from '../redux/slices/signUpSlice'

const SignUpScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.signUp.isLoading)
  const navigation = useNavigation()
  const username = useValidation('', 'isEmpty')
  const email = useValidation('', 'isEmail')
  const password = useValidation('', 'isPassword')

  const handleSignIn = () => {
    dispatch(
      signUp({
        username: username.value,
        email: email.value,
        password: password.value,
      })
    )
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <VStack space='3'>
          <FormInput
            value={username.value}
            setValue={(text) => password.onChange(text)}
            onBlur={username.onBlur}
            errorMessage={username.errorMessage}
            label='Username'
          />
          <FormInput
            value={email.value}
            setValue={(text) => email.onChange(text)}
            onBlur={email.onBlur}
            errorMessage={email.errorMessage}
            label='Email'
          />
          <FormInputPassword
            value={password.value}
            setValue={(text) => password.onChange(text)}
            onBlur={password.onBlur}
            errorMessage={password.errorMessage}
          />
          <Button
            colorScheme='indigo'
            isDisabled={!username.isValid || !email.isValid || !password.isValid}
            onPress={handleSignIn}
            isLoading={loading}
          >
            Sign up
          </Button>
          <Button isDisabled={loading} onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default SignUpScreen
