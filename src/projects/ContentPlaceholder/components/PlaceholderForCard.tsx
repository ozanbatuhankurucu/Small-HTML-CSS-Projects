import ContentPlaceholder, { Item } from './ContentPlaceholder'

export const PlaceholderForCard = () => {
  const placeholderItems: Item[] = [
    { height: '192px', width: '100%' },
    { height: '14px', width: '60%', className: 'ml-6 mb-2 mt-4' },
    { height: '11px', width: '90%', className: 'ml-6' },
    { height: '11px', width: '80%', className: 'ml-6 mt-1' }
  ]

  const avatarPlaceholderItems: Item[] = [
    {
      height: '40px',
      width: '40px',
      shape: 'circle'
    }
  ]

  const userInfoPlaceholderItems: Item[] = [
    { height: '8px', width: '40%' },
    { height: '10px', width: '40%', className: 'mt-1' }
  ]

  return (
    <div className='w-[384px] shadow-lg rounded overflow-hidden'>
      <ContentPlaceholder items={placeholderItems} />
      <div className='px-6 mt-6 flex items-center gap-4'>
        <ContentPlaceholder items={avatarPlaceholderItems} />
        <ContentPlaceholder
          items={userInfoPlaceholderItems}
          placeholderWrapperClassName='w-full'
        />
      </div>
    </div>
  )
}
