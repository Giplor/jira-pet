import { Box, Center } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../../components/AuthComponents/FormInput'
import FormInputPassword from '../../components/AuthComponents/FormInputPassword'
import { setEmail, setPassword } from '../../redux/slices/signInSlice'

const SignInScreen = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.signIn.email)
  const password = useSelector((state) => state.signIn.password)

  const setEmailValue = (text) => {
    dispatch(setEmail(text))
  }
  const setPasswordValue = (text) => {
    dispatch(setPassword(text))
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <FormInput value={email} setValue={setEmailValue} label='Email' />
        <FormInputPassword value={password} setValue={setPasswordValue} />
      </Box>
    </Center>
  )
}

export default SignInScreen
