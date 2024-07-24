const generateRandomPosition = (size: number): { x: number; y: number } => {
  const x = Math.floor(Math.random() * (window.innerWidth - size))
  const y = Math.floor(Math.random() * (window.innerHeight - size))
  return { x, y }
}

export default generateRandomPosition
