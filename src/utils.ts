export const generateUniqueKey = (pre: string) =>
  `${pre}_${new Date().getTime()}`

export const getProgressIndicatorColor = (progress: number) => {
  if (progress >= 80) {
    return '#7BC620'
  }
  if (progress >= 50) {
    return '#D49D67'
  }
  return '#FB7D7E'
}
