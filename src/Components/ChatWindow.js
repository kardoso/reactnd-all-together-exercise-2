import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import InputForm from './InputForm'

function ChatWindow(props) {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.users[props.user].username}</div>

      <ul className="message-list">
        {props.messages.map((message, index) => (
          <Message
            index={index}
            username={props.users[props.user].username}
            message={message}
          />
        ))}
      </ul>

      <InputForm />
    </div>
  )
}

ChatWindow.propTypes = {
  user: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired
}

export default ChatWindow
