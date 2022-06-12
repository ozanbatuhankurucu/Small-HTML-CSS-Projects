import { Navigate } from 'react-router-dom'
import Projects from '../pages/Projects'
import HiddenSearchWidget from '../projects/HiddenSearchWidget'
import BlurryLoading from '../projects/BlurryLoading/BlurryLoading'

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
  },
  {
    id: '3',
    path: '/projects/blurry-loading',
    element: <BlurryLoading />
  }
]
export default routes
