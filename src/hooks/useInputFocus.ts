import { useEffect, useRef, useState } from 'react'

const useInputFocus = (showInputWidgetDefaultValue: boolean) => {
  const [showInputWidget, setShowInputWidget] = useState<boolean>(
    showInputWidgetDefaultValue
  )
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current && showInputWidget) {
      inputRef.current.focus()
    }
  }, [showInputWidget])

  return { inputRef, setShowInputWidget, showInputWidget }
}
export default useInputFocus
