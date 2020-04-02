import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

class ChatWindow extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false
  }

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">
          {this.props.users[this.props.user].username}
        </div>

        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <Message
              index={index}
              username={this.props.users[this.props.user].username}
              message={message}
            />
          ))}
        </ul>

        <div>
          <form className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your message..."
            />
            <div className="input-group-append">
              <button
                className="btn submit-button"
                disabled={this.isDisabled()}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

ChatWindow.propTypes = {
  user: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired
}

export default ChatWindow
