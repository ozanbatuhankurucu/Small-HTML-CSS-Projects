import { Helmet } from 'react-helmet'
import ThemeClock from './ThemeClock'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Theme Clock</title>
    </Helmet>
    <ThemeClock />
  </>
)
export default Wrapper
