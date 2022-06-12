import { Helmet } from 'react-helmet'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import projects from '../constants'
import { Project } from '../types'

function App() {
  return (
    <div className='h-screen bg-slate-200 flex justify-center items-center'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Small HTML & CSS & JS Projects</title>
      </Helmet>
      <ProjectCardList>
        {projects.map(({ name, to }: Project) => (
          <ProjectCard name={name} to={to} />
        ))}
      </ProjectCardList>
    </div>
  )
}

export default App
