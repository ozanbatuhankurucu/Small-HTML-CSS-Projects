import { Helmet } from 'react-helmet'
import SoundBoard from './SoundBoard'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Sound Board</title>
    </Helmet>
    <div className='h-screen flex justify-center items-center bg-[#e0aaff]'>
      <SoundBoard />
    </div>
  </>
)
export default Wrapper
