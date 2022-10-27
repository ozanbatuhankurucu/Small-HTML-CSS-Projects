import React, { FormEvent, useState } from 'react'
import cx from 'classnames'
import useToggleOnFocus from './useToggleOnFocus'

const INPUT_DEFAULT_COMMON_CLASSES = 'inline-block transition-all duration-150'
function FormWaveAnimation() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { isEmailInputFocused, eventHandlers: inputEventHandlers } =
    useToggleOnFocus()
  const {
    isEmailInputFocused: isPasswordInputFocused,
    eventHandlers: passwordInputEventHandlers
  } = useToggleOnFocus()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const emailInputFocusedClasses = {
    '-translate-y-6 text-lightblue': isEmailInputFocused || email
  }
  const passwordInputFocusedClasses = {
    '-translate-y-6 text-lightblue': isPasswordInputFocused || password
  }
  return (
    <div className='bg-black-400 px-8 py-12 rounded w-full sm:w-96'>
      <h1 className='font-bold text-2xl mb-12 text-center'>Please Login</h1>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='relative flex flex-col'>
          <label className='absolute top-4 text-base font-bold' htmlFor='e'>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[0ms]`,
                emailInputFocusedClasses
              )}>
              E
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[50ms]`,
                emailInputFocusedClasses
              )}>
              m
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[100ms]`,
                emailInputFocusedClasses
              )}>
              a
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[150ms]`,
                emailInputFocusedClasses
              )}>
              i
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[200ms]`,
                emailInputFocusedClasses
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
            required
            onFocus={inputEventHandlers.onFocus}
            onBlur={inputEventHandlers.onBlur}
          />
        </div>
        <div className='relative flex flex-col mt-8'>
          <label className='absolute top-4 text-base font-bold' htmlFor='p'>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[0ms]`,
                passwordInputFocusedClasses
              )}>
              P
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[50ms]`,
                passwordInputFocusedClasses
              )}>
              a
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[100ms]`,
                passwordInputFocusedClasses
              )}>
              s
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[150ms]`,
                passwordInputFocusedClasses
              )}>
              s
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[200ms]`,
                passwordInputFocusedClasses
              )}>
              w
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[250ms]`,
                passwordInputFocusedClasses
              )}>
              o
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[300ms]`,
                passwordInputFocusedClasses
              )}>
              r
            </span>
            <span
              className={cx(
                `${INPUT_DEFAULT_COMMON_CLASSES} delay-[350ms]`,
                passwordInputFocusedClasses
              )}>
              d
            </span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-white border-0 bg-transparent border-b-2 border-white py-4 focus:outline-none'
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
