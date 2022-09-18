import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { setAccessToken, setRefreshToken } from '../redux/slices/tokensSlice'
import AuthRoute from './AuthRoute'
import MainRoute from './MainRoute'

const MainCondition = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.tokens.accessToken)
  const refreshToken = useSelector((state) => state.tokens.refreshToken)

  if (refreshToken) {
    let decoded = jwtDecode(refreshToken)
    const currentDate = dayjs()
    const expirationDate = dayjs.unix(decoded.exp)
    console.log(currentDate)
    console.log(expirationDate)
    if (currentDate.diff(expirationDate) > 0) {
      console.log('fdfdf', currentDate.diff(expirationDate))
      dispatch(setAccessToken(null))
      dispatch(setRefreshToken(null))
    }
  }

  if (token) {
    return <MainRoute />
  } else {
    return <AuthRoute />
  }
}

export default MainCondition
