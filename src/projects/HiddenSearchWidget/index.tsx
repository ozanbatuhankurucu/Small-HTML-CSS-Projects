import Helmet from 'react-helmet'
import HiddenSearchWidget from './HiddenSearchWidget'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Hidden Search Widget</title>
    </Helmet>
    <div className='h-screen flex justify-center items-center bg-gray-800'>
      <HiddenSearchWidget placeholder='Search...' />
    </div>
  </>
)

export default Wrapper
