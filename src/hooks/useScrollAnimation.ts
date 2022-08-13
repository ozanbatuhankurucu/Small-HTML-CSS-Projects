import { useEffect, useLayoutEffect } from 'react'

const useScrollAnimation = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box')
    const triggerBottom = window.innerHeight * 0.85
    const onScroll = () => {
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
          box.classList.add('!translate-x-0')
        } else {
          box.classList.remove('!translate-x-0')
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useLayoutEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0)
    }
  }, [])
}

export default useScrollAnimation
