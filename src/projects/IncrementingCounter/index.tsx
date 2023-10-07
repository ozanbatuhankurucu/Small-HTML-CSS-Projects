import { Helmet } from 'react-helmet'
import IncrementingCounter from './IncrementingCounter'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Incrementing Counter</title>
    </Helmet>
    <IncrementingCounter />
  </>
)
export default Wrapper
