import { Helmet } from 'react-helmet'
import { KineticCSSLoader } from './KineticCSSLoader'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Kinetic CSS Loader App</title>
    </Helmet>
    <KineticCSSLoader />
  </>
)
export default Wrapper
