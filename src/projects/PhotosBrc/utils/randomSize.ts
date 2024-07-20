const getRandomSize = () => {
  const sizes = [
    'w-8 h-8',
    'w-12 h-12',
    'w-16 h-16',
    'w-20 h-20',
    'w-24 h-24',
    'w-28 h-28',
    'w-32 h-32',
    'w-36 h-36',
    'w-40 h-40',
    'w-44 h-44',
    'w-48 h-48',
    'w-52 h-52',
    'w-56 h-56',
    'w-60 h-60'
  ]
  return sizes[Math.floor(Math.random() * sizes.length)]
}

export default getRandomSize
