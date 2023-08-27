import { Project } from './types'
import { generateUniqueKey } from './utils'

// hard coded values must be uppercase
const PROJECTS: Project[] = [
  {
    projectName: 'Hidden Search Widget',
    to: 'hidden-search-widget',
    progress: 10,
    addedDate: '2022-05-28'
  },
  {
    projectName: 'Blurry Loading',
    to: 'blurry-loading',
    progress: 10,
    addedDate: '2022-06-12'
  },
  {
    projectName: 'Scroll Animation',
    to: 'scroll-animation',
    progress: 10,
    addedDate: '2022-07-13'
  },
  {
    projectName: 'Split Landing Page',
    to: 'split-landing-page',
    progress: 10,
    addedDate: '2022-09-15'
  },
  {
    projectName: 'Form Wave Animation',
    to: 'form-wave-animation',
    progress: 10,
    addedDate: '2022-10-29'
  },
  {
    projectName: 'Sound Board',
    to: 'sound-board',
    progress: 10,
    addedDate: '2022-12-18'
  },
  {
    projectName: 'Search Dropdown',
    to: 'search-dropdown',
    progress: 10,
    addedDate: '2023-01-04'
  },
  {
    projectName: 'Dad Jokes',
    to: 'dad-jokes',
    progress: 10,
    addedDate: '2023-02-16'
  },
  {
    projectName: 'Event KeyCodes',
    to: 'event-keycodes',
    progress: 10,
    addedDate: '2023-02-27'
  },
  {
    projectName: 'FAQ Collapse',
    to: 'faq-collapse',
    progress: 10,
    addedDate: '2023-04-4'
  },
  {
    projectName: 'Diamond Autograder',
    to: 'diamond-autograder',
    progress: 10,
    addedDate: '2023-02-06'
  },
  {
    projectName: 'Random Choice Picker',
    to: 'random-choice-picker',
    progress: 10,
    addedDate: '2023-08-21'
  }
  // {
  //   projectName: 'Duty Cycle Scaling',
  //   to: 'duty-cycle-sampling',
  //   progress: 10,
  //   addedDate: '2023-02-15'
  // }
]

const projectsWithId = PROJECTS.map((project) => ({
  ...project,
  id: generateUniqueKey(project.projectName)
}))

export default projectsWithId
