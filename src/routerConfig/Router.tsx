import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from './routes'

const AppRouter = () => {
  const routeComponents = routes.map(({ path, element, id, childRoutes }) =>
    childRoutes ? (
      <Route key={id} path={path} element={element}>
        {childRoutes}
      </Route>
    ) : (
      <Route key={id} path={path} element={element} />
    )
  )
  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  )
}

export default AppRouter
