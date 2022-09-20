import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, VStack } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../components/AuthComponents/FormInput'
import FormInputPassword from '../components/AuthComponents/FormInputPassword'
import { handleSignIn, setEmail, setPassword } from '../redux/slices/signInSlice'

const SignInScreen = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.signIn.email)
  const password = useSelector((state) => state.signIn.password)
  const loading = useSelector((state) => state.signIn.isLoading)
  const navigation = useNavigation()

  const setEmailValue = (text) => {
    dispatch(setEmail(text))
  }

  const setPasswordValue = (text) => {
    dispatch(setPassword(text))
  }

  const signIn = () => {
    dispatch(handleSignIn())
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <VStack space='3'>
          <FormInput value={email} label='Email' setValue={setEmailValue} />
          <FormInputPassword value={password.value} setValue={setPasswordValue} />
          <Button colorScheme='indigo' isLoading={loading} onPress={signIn}>
            Sign in
          </Button>
          <Button onPress={() => navigation.navigate('SignUp')}>Sign up</Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default SignInScreen
