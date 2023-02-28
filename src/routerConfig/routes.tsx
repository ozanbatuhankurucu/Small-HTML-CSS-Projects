import { Navigate, Route } from 'react-router-dom'
import Projects from '../pages/Projects'
import HiddenSearchWidget from '../projects/HiddenSearchWidget'
import BlurryLoading from '../projects/BlurryLoading'
import ScrollAnimation from '../projects/ScrollAnimation'
import SplitLandingPage from '../projects/SplitLandingPage'
import Wrapper from '../projects/FormWaveAnimation'
import SoundBoard from '../projects/SoundBoard'
import SearchDropdown from '../projects/SearchDropdown'
import DadJokes from '../projects/DadJokes'
import DiamondAutograder from '../projects/DiamondAutograder'
import DutyCycleSamplingWrapper from '../projects/DutyCycleSampling'
import EventKeycodes from '../projects/EventKeycodes'
import { Results } from '../projects/DutyCycleSampling/Results'
import { Inputs } from '../projects/DutyCycleSampling/Inputs'
import { generateUniqueKey } from '../utils'

const routes = [
  {
    path: '/',
    element: <Navigate to='/projects' />
  },
  {
    path: '/projects/',
    element: <Projects />
  },
  {
    path: '/projects/hidden-search-widget',
    element: <HiddenSearchWidget />
  },
  {
    path: '/projects/blurry-loading',
    element: <BlurryLoading />
  },
  {
    path: '/projects/scroll-animation',
    element: <ScrollAnimation />
  },
  {
    path: '/projects/split-landing-page',
    element: <SplitLandingPage />
  },
  {
    path: '/projects/form-wave-animation',
    element: <Wrapper />
  },
  {
    path: '/projects/sound-board',
    element: <SoundBoard />
  },
  {
    path: '/projects/search-dropdown',
    element: <SearchDropdown />
  },
  {
    path: '/projects/dad-jokes',
    element: <DadJokes />
  },
  {
    path: '/projects/diamond-autograder',
    element: <DiamondAutograder />
  },
  {
    path: '/projects/duty-cycle-sampling',
    element: <DutyCycleSamplingWrapper />,
    childRoutes: (
      <>
        <Route path='' element={<Navigate to='inputs' />} />
        <Route path='inputs' element={<Inputs />} />
        <Route path='results' element={<Results />} />
      </>
    )
  },
  {
    path: '/projects/event-keycodes',
    element: <EventKeycodes />
  }
]

const routesWithId = routes.map((route) => ({
  ...route,
  id: generateUniqueKey(route.path)
}))

export default routesWithId
