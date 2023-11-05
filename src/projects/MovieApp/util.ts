export const getVoteColor = (voteAverage: number) => {
  if (voteAverage >= 7) return 'green'
  if (voteAverage >= 5) return 'orange'
  return 'red'
}
