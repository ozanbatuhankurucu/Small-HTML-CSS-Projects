import { Helmet } from 'react-helmet'
import ContentPlaceholder from './ContentPlaceholder'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Content Placeholder</title>
    </Helmet>
    <ContentPlaceholder />
  </>
)
export default Wrapper
