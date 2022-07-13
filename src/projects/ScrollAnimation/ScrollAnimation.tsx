import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ContentCard from './ContentCard'

const SmoothCards = [
  {
    id: '1',
    isLeft: true
  },
  {
    id: '2',
    isLeft: false
  },
  {
    id: '3',
    isLeft: true
  },
  {
    id: '4',
    isLeft: false
  },
  {
    id: '5',
    isLeft: true
  },
  {
    id: '6',
    isLeft: false
  },
  {
    id: '7',
    isLeft: true
  },
  {
    id: '8',
    isLeft: false
  },
  {
    id: '9',
    isLeft: true
  },
  {
    id: '10',
    isLeft: false
  }
]

function ScrollAnimation() {
  const CardElements = SmoothCards.map((card) => (
    <ContentCard key={card.id} isLeft={card.isLeft} />
  ))
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

  return (
    <div>
      <Helmet>
        <title>Scroll Animation</title>
      </Helmet>
      <div className='pt-2 bg-[#ECE7D1] flex flex-col items-center justify-center'>
        <h1>Scroll to see the animation</h1>
        {CardElements}
      </div>
    </div>
  )
}

export default ScrollAnimation
