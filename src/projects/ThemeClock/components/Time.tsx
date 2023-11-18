import moment from 'moment'
import React from 'react'

export const Time = () => {
  const currentTime = moment()
  const formattedTime = currentTime.format('h:mm A') // For time like '1:57 PM'
  const formattedDayMonth = currentTime.format('dddd, MMM').toUpperCase() // For date format like 'MONDAY, NOV'
  const dayOfMonth = currentTime.date() // For day of the month as a number

  return (
    <div className='flex flex-col items-center dark:text-white'>
      <div className='mt-8 text-4xl font-normal'>{formattedTime}</div>
      <div className='flex items-center gap-2 mt-4'>
        <div className='text-sm text-gray-500 font-medium dark:text-white'>
          {formattedDayMonth}
        </div>
        <div className='rounded-full h-6 w-6 bg-black text-white text-xs font-medium flex items-center justify-center dark:bg-white dark:text-black'>
          {dayOfMonth}
        </div>
      </div>
    </div>
  )
}
