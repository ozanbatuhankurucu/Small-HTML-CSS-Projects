import React, { useState } from 'react'
import cx from 'classnames'

const GOAL_LITERS = 2
const GLASS_ML = 0.25

const DrinkWater = () => {
  const [litersDrank, setLitersDrank] = useState(0)
  const glasses = [...Array(GOAL_LITERS / GLASS_ML)]
  const filledHeightPercentage = (litersDrank / GOAL_LITERS) * 100

  return (
    <div className='min-h-screen bg-[#3494e4] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-6 text-white'>Drink Water</h1>
      <div className='bg-white p-6 rounded shadow-xl'>
        <h3 className='mb-4 font-medium text-lg'>Goal: {GOAL_LITERS} Liters</h3>
        <div className='rounded p-4 mb-4 border-4 border-[#144fc6] h-16 relative'>
          {litersDrank !== GOAL_LITERS && (
            <div className='flex items-center gap-1 absolute left-4 z-20 text-[#144fc6]'>
              <p className='text-xl font-semibold'>
                {GOAL_LITERS - litersDrank}L
              </p>
              <span className='text-base font-normal'>Remained</span>
            </div>
          )}
          <div
            style={{
              width: `${filledHeightPercentage}%`
            }}
            className='absolute top-0 left-0 h-full bg-[#6ab3f8] transition-all z-10'
          />
          <span className='text-[#144fc6] font-bold text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 z-30'>
            {filledHeightPercentage}%
          </span>
        </div>
        <p className='font-medium text-base'>
          Select how many glasses of water that you have drank
        </p>
        <div className='flex gap-2'>
          {glasses.map((_, index) => {
            const ml = (index + 1) * GLASS_ML
            return (
              <button
                key={index}
                type='button'
                className={cx(
                  'text-[#144fc6] border-4 border-[#144fc6] my-2 px-1 py-8 rounded-bl-3xl rounded-br-3xl font-medium text-sm w-14',
                  {
                    '!bg-[#6ab3f8]': ml <= litersDrank
                  }
                )}
                onClick={() => setLitersDrank(ml)}>
                {GLASS_ML * 1000} ml
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DrinkWater
