import React from 'react'

function Progress(props) {
  return (
    <div className='progress'>
      Question {props.current} / {props.total}
    </div>
  )
}

export default Progress
