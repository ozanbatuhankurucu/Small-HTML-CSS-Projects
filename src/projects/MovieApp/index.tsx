import { Helmet } from 'react-helmet'
import { MovieApp } from './MovieApp'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Movie App</title>
    </Helmet>
    <MovieApp />
  </>
)
export default Wrapper
