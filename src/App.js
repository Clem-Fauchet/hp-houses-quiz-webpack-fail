import React, { useState, useEffect } from 'react'

import './styles/App.scss'
import quizQuestions from './api/quizQuestions'
import Progress from './components/Progress'
import Question from './components/Question'
import AnswerOption from './components/AnswerOption'

function App() {
  useState[(state, setState)] = useState({
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
  })

  useEffect(() => {
    setState({
      question: quizQuestions[1].question,
      answerOptions: quizQuestions.map((question) => question.answers),
    })
  })

  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>
          <h1>Which Hogwarts house do you belong to?</h1>
        </div>
        <div className='houses'></div>
      </div>

      <div className='quiz-container'>
        <Progress total='15' current={state.questionId} />
        <Question question={state.question} />
        {/* <AnswerOption
          // key={item.content}
          // answerContent={item.content}
          // answerType={item.answerType}
          answers={answerOptions}
        /> */}
      </div>
    </div>
  )
}

export default App
