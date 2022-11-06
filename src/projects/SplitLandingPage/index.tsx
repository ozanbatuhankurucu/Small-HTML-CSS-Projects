import { Helmet } from 'react-helmet'
import SplitLandingPage from './SplitLandingPage'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Split Landing Page</title>
    </Helmet>
    <div className='h-screen'>
      <SplitLandingPage />
    </div>
  </>
)
export default Wrapper
