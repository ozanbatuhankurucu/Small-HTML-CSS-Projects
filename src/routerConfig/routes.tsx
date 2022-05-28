import { Navigate } from 'react-router-dom'
import Projects from '../pages/Projects'
import HiddenSearchWidget from '../projects/HiddenSearchWidget'

const routes = [
  {
    id: '0',
    path: '/',
    element: <Navigate to='/projects' />
  },
  {
    id: '1',
    path: '/projects/',
    element: <Projects />
  },
  {
    id: '2',
    path: '/projects/hidden-search-widget',
    element: <HiddenSearchWidget />
  }
]
export default routes
