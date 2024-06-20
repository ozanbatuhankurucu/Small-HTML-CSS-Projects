import { Helmet } from 'react-helmet'
import ContentPlaceholderContainer from './ContentPlaceholderContainer'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Content Placeholder</title>
    </Helmet>
    <ContentPlaceholderContainer />
  </>
)
export default Wrapper
