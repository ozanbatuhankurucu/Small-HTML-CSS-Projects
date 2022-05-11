import { Helmet } from 'react-helmet'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className='p-4'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Small HTML & CSS & JS Projects</title>
      </Helmet>
      <MainPage />
    </div>
  )
}

export default App
