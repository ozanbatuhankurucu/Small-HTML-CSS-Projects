import { useMemo, useState } from 'react'

const useToggleOnFocus = (initialState = false) => {
  const [isInputFocused, toggle] = useState(initialState)

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

  return { isInputFocused, eventHandlers }
}

export default useToggleOnFocus
