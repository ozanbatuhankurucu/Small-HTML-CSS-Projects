import { Helmet } from 'react-helmet'
import { ContactForm } from './ContactForm'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Contact Form</title>
    </Helmet>
    <div className='h-screen flex justify-center items-center'>
      <ContactForm />
    </div>
  </>
)
export default Wrapper
