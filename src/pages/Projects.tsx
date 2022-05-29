import { Helmet } from 'react-helmet'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'
import projects from '../constants'
import { Project } from '../types'

function App() {
  return (
    <div className='p-4 h-screen bg-slate-100'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Small HTML & CSS & JS Projects</title>
      </Helmet>
      <ProjectCardList>
        {projects.map(({ name, to, imgSrc }: Project) => (
          <ProjectCard name={name} to={to} imgSrc={imgSrc} />
        ))}
      </ProjectCardList>
    </div>
  )
}

export default App
