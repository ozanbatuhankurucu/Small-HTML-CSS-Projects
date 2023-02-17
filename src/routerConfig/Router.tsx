import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from './routes'

const AppRouter = () => {
  const routeComponents = routes.map(({ path, element, id, childRoutes }) => (
    <Route key={id} path={path} element={element}>
      {childRoutes}
    </Route>
  ))
  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  )
}

export default AppRouter
