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
import FaqCollapse from '../projects/FaqCollapse'
import { Results } from '../projects/DutyCycleSampling/Results'
import { Inputs } from '../projects/DutyCycleSampling/Inputs'
import { generateUniqueKey } from '../utils'
import RandomChoicePicker from '../projects/RandomChoicePicker/RandomChoicePicker'
import AnimatedNavigation from '../projects/AnimatedNavigation/AnimatedNavigation'

const PROJECTS_PATH = '/projects/'

const routes = [
  {
    path: '/',
    element: <Navigate to='/projects' />
  },
  {
    path: PROJECTS_PATH,
    element: <Projects />
  },
  {
    path: `${PROJECTS_PATH}hidden-search-widget`,
    element: <HiddenSearchWidget />
  },
  {
    path: `${PROJECTS_PATH}blurry-loading`,
    element: <BlurryLoading />
  },
  {
    path: `${PROJECTS_PATH}scroll-animation`,
    element: <ScrollAnimation />
  },
  {
    path: `${PROJECTS_PATH}split-landing-page`,
    element: <SplitLandingPage />
  },
  {
    path: `${PROJECTS_PATH}form-wave-animation`,
    element: <Wrapper />
  },
  {
    path: `${PROJECTS_PATH}sound-board`,
    element: <SoundBoard />
  },
  {
    path: `${PROJECTS_PATH}search-dropdown`,
    element: <SearchDropdown />
  },
  {
    path: `${PROJECTS_PATH}dad-jokes`,
    element: <DadJokes />
  },
  {
    path: `${PROJECTS_PATH}diamond-autograder`,
    element: <DiamondAutograder />
  },
  {
    path: `${PROJECTS_PATH}duty-cycle-sampling`,
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
    path: `${PROJECTS_PATH}event-keycodes`,
    element: <EventKeycodes />
  },
  {
    path: `${PROJECTS_PATH}faq-collapse`,
    element: <FaqCollapse />
  },
  {
    path: `${PROJECTS_PATH}random-choice-picker`,
    element: <RandomChoicePicker />
  },
  {
    path: `${PROJECTS_PATH}animated-navigation`,
    element: <AnimatedNavigation />
  }
]

const routesWithId = routes.map((route) => ({
  ...route,
  id: generateUniqueKey(route.path)
}))

export default routesWithId
