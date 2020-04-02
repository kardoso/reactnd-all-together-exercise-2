import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  const { index, username, message } = props

  return (
    <li
      key={index}
      className={
        message.username === username ? 'message sender' : 'message recipient'
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  )
}

Message.propTypes = {
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired
}

export default Message
