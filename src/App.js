import React from 'react'

import './styles/App.scss'

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>
          <h1>Which Hogwarts house do you belong to?</h1>
        </div>
        <div className='houses'></div>
      </div>

      <div className='quiz-container'>
        <div className='progress'>
          <h2>Question 1 of 15</h2>
        </div>
        <div className='questions'>Question 1</div>
        <div className='answers'>
          <span>Rep 1</span>
          <span>Rep 2</span>
          <span>Rep 3</span>
          <span>Rep 4</span>
        </div>
      </div>
    </div>
  )
}

export default App
