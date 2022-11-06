import { Helmet } from 'react-helmet'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import projects from '../constants'
import { Project } from '../types'

const App = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Small HTML & CSS & JS Projects</title>
    </Helmet>
    <div className='h-screen bg-slate-200 flex justify-center items-center'>
      <ProjectCardList>
        {projects.map(({ name, to, id }: Project) => (
          <ProjectCard key={id} name={name} to={to} />
        ))}
      </ProjectCardList>
    </div>
  </>
)

export default App
