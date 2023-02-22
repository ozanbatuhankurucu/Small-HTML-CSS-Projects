import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import routes from './routes'

const AppRouter = () => {
  const routeComponents = routes.map(({ path, element, id, childRoutes }) => (
    <Route key={id} path={path} element={element}>
      {childRoutes}
    </Route>
  ))
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>{routeComponents}</Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default AppRouter
