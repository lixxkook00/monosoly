import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { routesConfig } from './routes-config'
import { Loading } from '../components'

const AppRoutes = () => {
  const routes = useRoutes(routesConfig)

  return <Suspense fallback={<Loading />}>{routes}</Suspense>
}

export default AppRoutes
