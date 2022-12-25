import { Helmet } from 'react-helmet'
import DadJokes from './DadJokes'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Dad Jokes</title>
    </Helmet>
    <div className='h-screen flex justify-center items-center'>
      <DadJokes />
    </div>
  </>
)
export default Wrapper
