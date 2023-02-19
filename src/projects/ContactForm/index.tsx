import { Helmet } from 'react-helmet'
import { ContactForm } from './ContactForm'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Contact Form</title>
    </Helmet>
    <ContactForm />
  </>
)
export default Wrapper
