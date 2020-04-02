import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  const { message } = props

  return <p>{`${message.username}: ${message.text}`}</p>
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
