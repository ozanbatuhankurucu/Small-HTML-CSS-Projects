import React, { FormEvent, useState } from 'react'
import cx from 'classnames'
import useFocusedData from './useFocusedData'
import InputLabel from './InputLabel'

const FormWaveAnimation = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isPasswordInputFocused,
    passwordInputEventHandlers,
    isEmailInputFocused,
    emailInputEventHandlers
  } = useFocusedData()
  const [passwordInputType, setPasswordInputType] = useState('password')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='bg-white px-8 py-12 rounded-3xl w-full sm:w-96'>
      <h1 className='font-extrabold text-2xl text-center text-black'>
        Please Login
      </h1>
      <div className='text-center mt-4 text-sm'>
        Hey, Enter your details to get sign in to your account
      </div>
      <form className='flex flex-col gap-6 mt-4' onSubmit={handleSubmit}>
        <InputLabel
          label='Email'
          isInputFocused={isEmailInputFocused}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='email'
          required
          onFocus={emailInputEventHandlers.onFocus}
          onBlur={emailInputEventHandlers.onBlur}
        />
        <InputLabel
          className='mt-2'
          label='Password'
          isInputFocused={isPasswordInputFocused}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          type={passwordInputType}
          required
          onFocus={passwordInputEventHandlers.onFocus}
          onBlur={passwordInputEventHandlers.onBlur}>
          <button
            type='button'
            className={cx(
              'absolute right-0 top-[50%] -translate-y-[50%] text-xs text-gray-800',
              {
                'line-through': passwordInputType === 'password'
              }
            )}
            onClick={() => {
              if (passwordInputType === 'password') {
                setPasswordInputType('text')
              }
              if (passwordInputType === 'text') {
                setPasswordInputType('password')
              }
            }}>
            Hide
          </button>
        </InputLabel>
        <p className='text-sm'>Having trouble in sign in?</p>
        <button
          className='bg-[#FDC886] text-black text-sm font-bold rounded-lg py-2 mt-4 focus:scale-[98%]'
          type='submit'>
          Sign in
        </button>
      </form>
      <p className='text-sm font-medium mt-8 text-center text-black'>
        Don&apos;t have an account?{' '}
        <a className='font-black' href='https://www.google.com'>
          Register
        </a>
      </p>
    </div>
  )
}
export default FormWaveAnimation
