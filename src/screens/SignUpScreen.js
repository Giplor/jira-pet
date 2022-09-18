import { Box, Center, View } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormButton from '../components/AuthComponents/FormButton'
import FormInput from '../components/AuthComponents/FormInput'
import FormInputPassword from '../components/AuthComponents/FormInputPassword'
import SwitchScreen from '../components/AuthComponents/SwitchScreen'
import {
  setUsername,
  setEmail,
  setPassword,
  handleSignUp,
} from '../redux/slices/signUpSlice'

const SignUpScreen = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.signUp.username)
  const email = useSelector((state) => state.signUp.email)
  const password = useSelector((state) => state.signUp.password)

  const setUsernameValue = (text) => {
    dispatch(setUsername(text))
  }

  const setEmailValue = (text) => {
    dispatch(setEmail(text))
  }

  const setPasswordValue = (text) => {
    dispatch(setPassword(text))
  }

  const signUp = () => {
    dispatch(handleSignUp({ username, email, password }))
  }

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <FormInput value={username} setValue={setUsernameValue} label='Username' />
        <FormInput value={email} setValue={setEmailValue} label='Email' />
        <FormInputPassword value={password} setValue={setPasswordValue} />
        <FormButton title='Sign up' onSubmit={signUp} />
        <SwitchScreen screenName='SignIn' />
      </Box>
    </Center>
  )
}

export default SignUpScreen
