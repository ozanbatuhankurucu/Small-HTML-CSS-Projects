import { Navigate } from 'react-router-dom'
import Projects from '../pages/Projects'
import HiddenSearchWidget from '../projects/HiddenSearchWidget'
import BlurryLoading from '../projects/BlurryLoading'
import ScrollAnimation from '../projects/ScrollAnimation'
import SplitLandingPage from '../projects/SplitLandingPage'
import FormWaveAnimation from '../projects/FormWaveAnimation'

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
  },
  {
    id: '4',
    path: '/projects/scroll-animation',
    element: <ScrollAnimation />
  },
  {
    id: '5',
    path: '/projects/split-landing-page',
    element: <SplitLandingPage />
  },
  {
    id: '6',
    path: '/projects/form-wave-animation',
    element: <FormWaveAnimation />
  }
]
export default routes
