import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputForm extends Component {
  state = {
    messageContent: ''
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.messageContent === ''
  }

  sendMessage = e => {
    e.preventDefault()
    this.props.updateMessages({
      username: this.props.username,
      text: this.state.messageContent
    })
  }

  render() {
    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.messageContent}
            onChange={e => this.setState({ messageContent: e.target.value })}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn submit-button"
              disabled={this.isDisabled()}
              onClick={this.sendMessage}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default InputForm

InputForm.propTypes = {
  username: PropTypes.string.isRequired,
  updateMessages: PropTypes.func.isRequired
}
