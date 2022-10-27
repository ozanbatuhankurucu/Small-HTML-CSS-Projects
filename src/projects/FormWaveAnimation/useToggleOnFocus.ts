import { useMemo, useState } from 'react'

const useToggleOnFocus = (initialState = false) => {
  const [isEmailInputFocused, toggle] = useState(initialState)

  const eventHandlers: {
    onFocus: () => void
    onBlur: () => void
  } = useMemo(
    () => ({
      onFocus: () => toggle(true),
      onBlur: () => toggle(false)
    }),
    []
  )

  return { isEmailInputFocused, eventHandlers }
}

export default useToggleOnFocus
