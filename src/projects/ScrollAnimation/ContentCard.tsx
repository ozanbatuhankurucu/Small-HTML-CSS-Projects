import React from 'react'
import cs from 'classnames'

interface ContentCardProps {
  isLeft: boolean
}

function ContentCard({ isLeft }: ContentCardProps) {
  return (
    <div
      className={cs(
        'h-36 w-64 m-4 transition-all duration-500 text-white text-2xl flex font-bold rounded justify-center items-center bg-sky-600 box',
        {
          'translate-x-[400%]': !isLeft,
          'translate-x-[-400%]': isLeft
        }
      )}>
      Content
    </div>
  )
}
export default ContentCard
