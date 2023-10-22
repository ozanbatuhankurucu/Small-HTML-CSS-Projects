const API_BASE_URL = 'https://api.themoviedb.org/3'

const buildURL = (
  path: string,
  queryParams:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined = {}
) => {
  const params = new URLSearchParams(queryParams).toString()
  return `${API_BASE_URL}${path}${params ? `?${params}` : ''}`
}

export default {
  MOVIE: {
    DISCOVER: buildURL(`/discover/movie`, {
      sort_by: 'popularity.desc',
      page: '1',
      api_key: process.env.REACT_APP_MOVIEDB_API_KEY as string
    }),
    SEARCH: (query: string) =>
      buildURL(`/search/movie`, {
        query,
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY as string
      })
  }
}
