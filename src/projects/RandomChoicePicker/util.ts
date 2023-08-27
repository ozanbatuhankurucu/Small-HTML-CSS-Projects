export function getRandomIndexFromArray(array: string[]) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Input should be a non-empty array.')
  }

  const randomIndex = Math.floor(Math.random() * array.length)
  return randomIndex
}
