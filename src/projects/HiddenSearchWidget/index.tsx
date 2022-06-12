import Helmet from 'react-helmet'
import HiddenSearchWidget from './HiddenSearchWidget'

function Wrapper() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-800'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hidden Search Widget</title>
      </Helmet>
      <HiddenSearchWidget placeholder='Search...' />
    </div>
  )
}

export default Wrapper
