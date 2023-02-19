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
import { Results } from '../projects/DutyCycleSampling/Results'
import { Inputs } from '../projects/DutyCycleSampling/Inputs'

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
    element: <Wrapper />
  },
  {
    id: '7',
    path: '/projects/sound-board',
    element: <SoundBoard />
  },
  {
    id: '8',
    path: '/projects/search-dropdown',
    element: <SearchDropdown />
  },
  {
    id: '9',
    path: '/projects/dad-jokes',
    element: <DadJokes />
  },
  {
    id: '10',
    path: '/projects/diamond-autograder',
    element: <DiamondAutograder />
  },
  {
    id: '11',
    path: '/projects/duty-cycle-sampling',
    element: <DutyCycleSamplingWrapper />,
    childRoutes: (
      <>
        <Route path='' element={<Navigate to='inputs' />} />
        <Route path='inputs' element={<Inputs />} />
        <Route path='results' element={<Results />} />
      </>
    )
  }
]
export default routes
