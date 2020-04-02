import React, { Component } from 'react'

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
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default InputForm
