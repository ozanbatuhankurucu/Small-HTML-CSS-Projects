import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import ProjectCardList from '../components/ProjectCardList'
import ProjectCard from '../components/ProjectCard'

function App() {
  return (
    <div className='p-4 h-screen bg-gray-300'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Small HTML & CSS & JS Projects</title>
      </Helmet>
      <ProjectCardList>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardList>
      <Outlet />
    </div>
  )
}

export default App
