import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import SecureInput from '../components/UIComponents/SecureInput'
import { useValidation } from '../hooks/useValidation'
import { signUp } from '../redux/slices/signUpSlice'
import { useFeedback } from '../hooks/useFeedback'

const SignUpScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.signUp.isLoading)
  const navigation = useNavigation()
  const username = useValidation('', 'isEmpty')
  const email = useValidation('', 'isEmail')
  const password = useValidation('', 'isPassword')
  const { showFeedback } = useFeedback()

  const handleSignIn = () => {
    dispatch(
      signUp({
        username: username.value,
        email: email.value,
        password: password.value,
        errorSignUp: showFeedback,
      })
    )
  }

  return (
    <Center width='100%'>
      <Box width='100%' maxWidth='260' safeArea>
        <VStack space='3'>
          <DefaultInput
            value={username.value}
            setValue={(text) => username.onChange(text)}
            onBlur={username.onBlur}
            errorMessage={username.errorMessage}
            label='Username'
          />
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
