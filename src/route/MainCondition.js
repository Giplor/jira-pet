import { useSelector } from 'react-redux'
import AuthRoute from './AuthRoute'
import MainRoute from './MainRoute'

const MainCondition = () => {
  const token = useSelector((state) => state.tokens.accessToken)

  if (token) {
    return <MainRoute />
  } else {
    return <AuthRoute />
  }
}

export default MainCondition
