import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  } else if (message.charAt(0) ==='E' || message.charAt(0) === 'F') { //E=error, F=feil
    return (
      <div className='negative'>
        {message}
      </div>
    )
  } else {

    return (
      <div className='positive'>
        {message}
      </div>
    )
  }
}

export default Notification