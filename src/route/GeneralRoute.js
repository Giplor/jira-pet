import { useSelector } from 'react-redux'
import ProjectsRoute from './ProjectsRoute'
import AuthRoute from './AuthRoute'

const GeneralRoute = () => {
  const token = useSelector((state) => state.tokens.accessToken)
  if (token) {
    return <ProjectsRoute />
  } else {
    return <AuthRoute />
  }
}

export default GeneralRoute
