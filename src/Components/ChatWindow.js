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
          <li
            key={index}
            className={
              message.username === props.users[props.user].username
                ? 'message sender'
                : 'message recipient'
            }
          >
            <Message message={message} />
          </li>
        ))}
      </ul>

      <InputForm
        username={props.users[props.user].username}
        updateMessages={props.updateMessages}
      />
    </div>
  )
}

ChatWindow.propTypes = {
  user: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  updateMessages: PropTypes.func.isRequired
}

export default ChatWindow
