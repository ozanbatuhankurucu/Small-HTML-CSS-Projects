import { Project } from './types'
import generateUniqueKey from './utils'

// hard coded values must be uppercase
const PROJECTS: Project[] = [
  {
    name: 'Hidden Search Widget',
    to: 'hidden-search-widget'
  },
  {
    name: 'Blurry Loading',
    to: 'blurry-loading'
  },
  {
    name: 'Scroll Animation',
    to: 'scroll-animation'
  },
  {
    name: 'Split Landing Page',
    to: 'split-landing-page'
  }
]

const projectsWithId = PROJECTS.map((project) => ({
  ...project,
  id: generateUniqueKey(project.name)
}))

export default projectsWithId
