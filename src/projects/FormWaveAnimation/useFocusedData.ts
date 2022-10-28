import { useState } from 'react'
import useToggleOnFocus from './useToggleOnFocus'

const INPUT_FOCUSED_CLASSES = '-translate-y-6 text-lightblue'
const useFocusedData = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { isEmailInputFocused, eventHandlers: inputEventHandlers } =
    useToggleOnFocus()
  const {
    isEmailInputFocused: isPasswordInputFocused,
    eventHandlers: passwordInputEventHandlers
  } = useToggleOnFocus()
  const emailInputFocusedClasses = {
    [INPUT_FOCUSED_CLASSES]: isEmailInputFocused || email
  }
  const passwordInputFocusedClasses = {
    [INPUT_FOCUSED_CLASSES]: isPasswordInputFocused || password
  }
  return {
    email,
    password,
    setEmail,
    setPassword,
    isEmailInputFocused,
    inputEventHandlers,
    isPasswordInputFocused,
    passwordInputEventHandlers,
    emailInputFocusedClasses,
    passwordInputFocusedClasses
  }
}

export default useFocusedData
