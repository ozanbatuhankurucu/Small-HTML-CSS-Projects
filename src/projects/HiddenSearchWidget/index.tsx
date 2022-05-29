import HiddenSearchWidget from './HiddenSearchWidget'
import Helmet from 'react-helmet'
function Wrapper() {
  return (
    <div className='h-screen flex justify-center items-center bg-crystal'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hidden Search Widget</title>
      </Helmet>
      <HiddenSearchWidget placeholder='Search...' />
    </div>
  )
}

export default Wrapper
