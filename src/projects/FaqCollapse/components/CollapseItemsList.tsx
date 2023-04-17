import React from 'react'
import CollapseItem from './CollapseItem'
import { QUESTIONS } from '../mockData'

const CollapseItemsList = () => {
  const questions = QUESTIONS.map(({ question, answer }) => (
    <CollapseItem key={question} question={question} answer={answer} />
  ))
  return (
    <div className='mt-8 flex items-center flex-col gap-4 w-full'>
      {questions}
    </div>
  )
}

export default CollapseItemsList
