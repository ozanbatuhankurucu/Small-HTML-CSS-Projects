import { Helmet } from 'react-helmet'
import FormWaveAnimation from './FormWaveAnimation'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Form Wave Animation</title>
    </Helmet>
    <div className='h-screen w-full flex items-center justify-center bg-[#F4F2EA] text-black px-2 font-muli'>
      <FormWaveAnimation />
    </div>
  </>
)

export default Wrapper
