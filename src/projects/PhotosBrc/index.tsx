import { Helmet } from 'react-helmet'
import PhotosBrc from './PhotosBrc'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Photos Brc</title>
    </Helmet>
    <PhotosBrc />
  </>
)
export default Wrapper
