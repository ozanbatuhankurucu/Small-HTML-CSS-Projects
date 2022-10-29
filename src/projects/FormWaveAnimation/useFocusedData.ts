import { useState } from 'react'
import useToggleOnFocus from './useToggleOnFocus'

const useFocusedData = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {
    isInputFocused: isEmailInputFocused,
    eventHandlers: emailInputEventHandlers
  } = useToggleOnFocus()
  const {
    isInputFocused: isPasswordInputFocused,
    eventHandlers: passwordInputEventHandlers
  } = useToggleOnFocus()

  return {
    email,
    password,
    setEmail,
    setPassword,
    isEmailInputFocused,
    emailInputEventHandlers,
    isPasswordInputFocused,
    passwordInputEventHandlers
  }
}

export default useFocusedData
