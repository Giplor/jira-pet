import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import DefaultInput from '../components/UIComponents/DefaultInput'
import SecureInput from '../components/UIComponents/SecureInput'
import { useValidation } from '../hooks/useValidation'
import { signIn } from '../redux/slices/signInSlice'
import { useFeedback } from '../hooks/useFeedback'

const SignInScreen = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.signIn.isLoading)
  const navigation = useNavigation()
  const email = useValidation('', 'isEmail')
  const password = useValidation('', 'isPassword')

  const { showFeedback } = useFeedback()

  const handleSignIn = () => {
    dispatch(
      signIn({
        email: email.value,
        password: password.value,
        errorSignIn: showFeedback,
      })
    )
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260' safeArea>
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
            onPress={handleSignIn}
            isDisabled={!email.isValid || !password.isValid}
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
