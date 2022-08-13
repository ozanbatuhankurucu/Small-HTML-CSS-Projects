import smoothCards from './constants'
import ContentCard from './ContentCard'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ScrollAnimation() {
  useScrollAnimation()
  return (
    <>
      <h1>Scroll to see the animation</h1>
      {smoothCards.map((card) => (
        <ContentCard key={card.id} isLeft={card.isLeft} />
      ))}
    </>
  )
}

export default ScrollAnimation
