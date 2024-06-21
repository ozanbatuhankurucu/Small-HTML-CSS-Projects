import moment from 'moment'
import React from 'react'
import { ContentPlaceholderType } from '../../../queries/types'
import { PlaceholderForCard } from './PlaceholderForCard'

interface CardProps {
  cardData?: ContentPlaceholderType
  isLoading?: boolean
}

const Card: React.FC<CardProps> = ({ cardData, isLoading }) => {
  const {
    cardImage,
    description,
    title,
    userImage,
    userJoiningDate,
    userName
  } = cardData || {}
  const formattedDate = moment(userJoiningDate).format('MMM DD, YYYY')

  if (isLoading) {
    return <PlaceholderForCard />
  }

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className='h-48 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={cardImage}
          alt={title}
        />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      <div className='px-6 py-2'>
        <div className='flex items-center'>
          <img
            className='w-10 h-10 rounded-full mr-4'
            src={userImage}
            alt={userName}
          />
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>{userName}</p>
            <p className='text-gray-600'>{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
