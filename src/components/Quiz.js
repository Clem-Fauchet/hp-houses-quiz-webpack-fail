import React from 'react'

import Progress from './Progress'
import Question from './Question'
import AnswerOption from './AnswerOption'

function Quiz(props, { answerOption }) {
  return (
    <div className='quiz-container'>
      <Progress current={props.questionId} total={props.questionTotal} />

      <Question question={props.question} />

      <ul className='answersOption'>
        {answerOption.map((item) => {
          return (
            <AnswerOption
              key={item.content}
              answerContent={item.content}
              answerType={item.answerType}
              answer={props.answer}
              questionId={props.questionId}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Quiz
