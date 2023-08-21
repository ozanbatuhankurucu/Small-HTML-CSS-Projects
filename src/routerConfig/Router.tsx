import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'
import routes from './routes'

const AppRouter = () => {
  const location = useLocation()

  const routeComponents = routes.map(({ path, element, id, childRoutes }) => (
    <Route key={id} path={path} element={element}>
      {childRoutes}
    </Route>
  ))
  return (
    <ChakraProvider>
      <div>
        <Routes>{routeComponents}</Routes>
        {location.pathname !== '/projects' && (
          <div className='flex items-center font-medium gap-2 rounded-md text-white bg-gray-700 px-3 py-2 fixed bottom-5 right-5'>
            <Link to='/projects'>Go to Projects</Link>
            <FaChevronRight size={14} />
          </div>
        )}
      </div>
    </ChakraProvider>
  )
}

export default AppRouter
