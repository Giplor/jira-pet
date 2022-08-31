import { Box, Center } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../../components/AuthComponents/FormInput'
import FormInputPassword from '../../components/AuthComponents/FormInputPassword'

const SignUpScreen = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.signUp.username)
  const email = useSelector((state) => state.signUp.email)
  const password = useSelector((state) => state.signUp.password)

  return (
    <Center width='100%' safeArea>
      <Box width='80%' maxWidth='260'>
        <FormInput value={username} label='Username' />
        <FormInput value={email} label='Email' />
        <FormInputPassword value={password} />
      </Box>
    </Center>
  )
}

export default SignUpScreen
