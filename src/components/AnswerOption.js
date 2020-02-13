import React from 'react'

function AnswerOption(props) {
  return (
    <li className='answers'>
      <input
        type='radio'
        className='radioButton'
        id={props.answerType}
        value={props.answerType}
      />
      <label className='radioLabel' htmlFor={props.answerType}>
        {/* {props.answerContent} */} {props.answer}
      </label>
    </li>
  )
}

export default AnswerOption
