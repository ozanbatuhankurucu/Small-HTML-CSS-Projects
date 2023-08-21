import { Helmet } from 'react-helmet'
import ProjectCard from '../components/ProjectCard'
import ProjectCardList from '../components/ProjectCardList'
import projects from '../constants'

const App = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Small HTML & CSS & JS Projects</title>
    </Helmet>
    <div className='p-8 min-h-screen bg-[#25262C]'>
      <h1 className='text-white font-bold text-2xl'>PROJECTS</h1>
      <ProjectCardList>
        {projects
          .sort(
            (a, b) =>
              new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
          )
          .map(({ projectName, to, id, progress, addedDate }) => (
            <ProjectCard
              key={id}
              projectName={projectName}
              to={to}
              progress={progress}
              addedDate={addedDate}
            />
          ))}
      </ProjectCardList>
    </div>
  </>
)

export default App
