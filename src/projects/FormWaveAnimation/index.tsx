import { Helmet } from 'react-helmet'

function FormWaveAnimation() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Split Landing Page</title>
      </Helmet>
      <div className='h-screen w-full flex items-center justify-center bg-steelblue text-white px-2 font-muli'>
        <form className='flex flex-col bg-black-400 p-8 rounded gap-5 w-full sm:w-96'>
          <h1 className='font-bold text-xl mb-4 mx-auto'>Please Login</h1>
          <div className='flex flex-col'>
            <label className='text-base' htmlFor='email'>
              Email
            </label>
            <input className='text-black' id='email' type='email' />
          </div>
          <div className='flex flex-col'>
            <label className='text-base' htmlFor='password'>
              Password
            </label>
            <input className='text-black' id='password' type='password' />
          </div>
          <button
            className='bg-slate-500 text-sm font-semibold rounded py-1'
            type='submit'>
            Login
          </button>
          <p className='text-sm font-bold mt-2'>
            Don&apos;t have an account?{' '}
            <a href='https://www.google.com'>Register</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default FormWaveAnimation
