import { Helmet } from 'react-helmet'
import SplitLandingPage from './SplitLandingPage'

function Wrapper() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Split Landing Page</title>
      </Helmet>
      <div className='h-screen flex justify-center items-center '>
        <SplitLandingPage />
      </div>
    </>
  )
}
export default Wrapper
