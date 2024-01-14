import React from 'react'
import cx from 'classnames'

export const Box = React.memo(
  ({ imgSrc, index, onDragOver, onDrop, onDragEnter, onDragStart }: any) => (
    <div
      key={index}
      className={cx('bg-white border-[2px] border-black w-24 h-24', {
        '!bg-black !border-dashed !border-white': imgSrc
      })}
      onDragOver={onDragOver}
      onDrop={() => onDrop(index)}
      onDragEnter={() => onDragEnter(index)}>
      {imgSrc && (
        <div
          className='h-full w-full'
          draggable
          onDragStart={() => onDragStart(index)}>
          <img
            className='h-full w-full object-cover'
            src={imgSrc}
            alt='box-img'
          />
        </div>
      )}
    </div>
  )
)
