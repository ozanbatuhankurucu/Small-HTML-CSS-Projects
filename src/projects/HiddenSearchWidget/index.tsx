import HiddenSearchWidget from './HiddenSearchWidget'
import Helmet from 'react-helmet'
import { COLORS } from './constants'
function Wrapper() {
  return (
    <div
      className={`h-screen flex justify-center items-center bg-[${COLORS.PAGE_BACKGROUND_COLOR}]`}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Hidden Search Widget</title>
      </Helmet>
      <HiddenSearchWidget
        placeholder='Search...'
        iconColor={COLORS.ICON_COLOR}
      />
    </div>
  )
}

export default Wrapper
