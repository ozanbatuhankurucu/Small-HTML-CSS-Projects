import { Helmet } from 'react-helmet'
import smoothCards from './constants'
import ContentCard from './ContentCard'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ScrollAnimation() {
  useScrollAnimation()
  return (
    <div>
      <Helmet>
        <title>Scroll Animation</title>
      </Helmet>
      <div className='pt-2 bg-[#ECE7D1] flex flex-col items-center justify-center'>
        <h1>Scroll to see the animation</h1>
        {smoothCards.map((card) => (
          <ContentCard key={card.id} isLeft={card.isLeft} />
        ))}
      </div>
    </div>
  )
}

export default ScrollAnimation
