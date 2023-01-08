import { Helmet } from 'react-helmet'
import SearchDropdown from './SearchDropdown'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Search Dropdown</title>
    </Helmet>
    <div className='h-screen flex justify-center items-center'>
      <SearchDropdown />
    </div>
  </>
)
export default Wrapper
