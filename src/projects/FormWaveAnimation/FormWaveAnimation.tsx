import React, { FormEvent, useState } from 'react'
import cx from 'classnames'

function FormWaveAnimation() {
  const [email, setEmail] = useState<string>('')
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  // TODOOzan: Make refactor
  // TODOOzan: Implement animation for password
  return (
    <div className='bg-black-400 px-8 py-12 rounded w-full sm:w-96'>
      <h1 className='font-bold text-2xl mb-12 text-center'>Please Login</h1>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='relative flex flex-col'>
          <label
            className={cx('absolute top-4 text-base font-bold')}
            htmlFor='email'>
            <span
              className={cx(
                'inline-block transition-all duration-150 delay-[0ms]',
                {
                  '-translate-y-6 text-lightblue': isEmailInputFocused || email
                }
              )}>
              E
            </span>
            <span
              className={cx(
                'inline-block transition-all duration-150 delay-[50ms]',
                {
                  '-translate-y-6 text-lightblue': isEmailInputFocused || email
                }
              )}>
              m
            </span>
            <span
              className={cx(
                'inline-block transition-all duration-150 delay-[100ms]',
                {
                  '-translate-y-6 text-lightblue': isEmailInputFocused || email
                }
              )}>
              a
            </span>
            <span
              className={cx(
                'inline-block transition-all duration-150 delay-[150ms]',
                {
                  '-translate-y-6 text-lightblue': isEmailInputFocused || email
                }
              )}>
              i
            </span>
            <span
              className={cx(
                'inline-block transition-all duration-150 delay-[200ms]',
                {
                  '-translate-y-6 text-lightblue': isEmailInputFocused || email
                }
              )}>
              l
            </span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-white border-0 bg-transparent border-b-2 border-white py-4 focus:outline-none'
            id='email'
            type='email'
            onFocus={() => setIsEmailInputFocused(true)}
            onBlur={() => setIsEmailInputFocused(false)}
            required
          />
        </div>
        <div className='relative flex flex-col mt-8'>
          <label
            className='absolute left-0 top-4 text-base font-bold'
            htmlFor='password'>
            Password
          </label>
          <input
            className='text-white border-0 bg-transparent border-b-2 border-white py-4 focus:outline-none'
            id='password'
            type='password'
            required
          />
        </div>
        <button
          className='bg-lightblue text-black text-base font-medium rounded py-3 mt-8 focus:scale-[98%]'
          type='submit'>
          Login
        </button>
      </form>
      <p className='text-sm font-bold mt-8'>
        Don&apos;t have an account?{' '}
        <a className='text-lightblue' href='https://www.google.com'>
          Register
        </a>
      </p>
    </div>
  )
}
export default FormWaveAnimation
