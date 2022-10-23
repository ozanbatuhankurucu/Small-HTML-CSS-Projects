import { Helmet } from 'react-helmet'
import FormWaveAnimation from './FormWaveAnimation'

function Wrapper() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Form Wave Animation</title>
      </Helmet>
      <div className='h-screen w-full flex items-center justify-center bg-steelblue text-white px-2 font-muli'>
        <FormWaveAnimation />
      </div>
    </>
  )
}

export default Wrapper
