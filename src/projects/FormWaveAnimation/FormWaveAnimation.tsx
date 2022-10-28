import React, { FormEvent } from 'react'
import cx from 'classnames'
import useFocusedData from './useFocusedData'

const INPUT_DEFAULT_COMMON_CLASSES = 'inline-block transition-all duration-150'
const EMAIL_INPUT_LABEL = 'Email'
const PASSWORD_INPUT_LABEL = 'Password'
function FormWaveAnimation() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    inputEventHandlers,
    passwordInputEventHandlers,
    emailInputFocusedClasses,
    passwordInputFocusedClasses
  } = useFocusedData()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='bg-black-400 px-8 py-12 rounded w-full sm:w-96'>
      <h1 className='font-bold text-2xl mb-12 text-center'>Please Login</h1>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='relative flex flex-col'>
          <label className='absolute top-4 text-base font-bold' htmlFor='e'>
            {EMAIL_INPUT_LABEL.split('').map((letter, index) => (
              <span
                className={cx(
                  `${INPUT_DEFAULT_COMMON_CLASSES} delay-[${index * 50}ms]`,
                  emailInputFocusedClasses
                )}>
                {letter}
              </span>
            ))}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-white border-0 bg-transparent border-b-2 border-white py-4 focus:outline-none focus:border-b-lightblue focus:caret-lightblue'
            id='email'
            type='email'
            required
            onFocus={inputEventHandlers.onFocus}
            onBlur={inputEventHandlers.onBlur}
          />
        </div>
        <div className='relative flex flex-col mt-8'>
          <label className='absolute top-4 text-base font-bold' htmlFor='p'>
            {PASSWORD_INPUT_LABEL.split('').map((letter, index) => (
              <span
                className={cx(
                  `${INPUT_DEFAULT_COMMON_CLASSES} delay-[${index * 50}ms]`,
                  passwordInputFocusedClasses
                )}>
                {letter}
              </span>
            ))}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-white border-0 bg-transparent border-b-2 border-white py-4 focus:outline-none focus:border-b-lightblue focus:caret-lightblue'
            id='password'
            type='password'
            required
            onFocus={passwordInputEventHandlers.onFocus}
            onBlur={passwordInputEventHandlers.onBlur}
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
