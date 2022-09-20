import { Box, Button, Center } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../components/AuthComponents/FormInput'
import FormInputPassword from '../components/AuthComponents/FormInputPassword'
import { handleSignIn, setEmail, setPassword } from '../redux/slices/signInSlice'

const SignInScreen = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.signIn.email)
  const password = useSelector((state) => state.signIn.password)
  const loading = useSelector((state) => state.signIn.isLoading)

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
        <FormInput value={email} label='Email' setValue={setEmailValue} />
        <FormInputPassword value={password.value} setValue={setPasswordValue} />
        <Button colorScheme='indigo' isLoading={loading}>
          Sign in
        </Button>
      </Box>
    </Center>
  )
}

export default SignInScreen
