import styled from 'styled-components'
import { Navbar } from './components/Navbar'

const Wrapper = styled.div`
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
`

const AnimatedNavigation = () => (
  <Wrapper className='min-h-screen flex flex-col items-center justify-center bg-[#2b88f0]'>
    <Navbar />
  </Wrapper>
)

export default AnimatedNavigation
