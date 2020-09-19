import React, { Component } from 'react';
import Detail from '../Detail/Detail';
import './message.scss'

class Message extends Component {
  state = {
    showDetails: false
  }

  handleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    const { message } = this.props.message

    return (
      <article className='message'>
        <p>Message: {message}</p>
        <p>
          Details
          <span onClick={this.handleDetails} className='square-button'>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </p>
        {this.state.showDetails && <Detail message={this.props.message} />}
      </article>
    )
  }
}

export default Message