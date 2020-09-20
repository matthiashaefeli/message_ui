import React, { Component } from 'react'

class Detail extends Component {
  render() {
    const { to_number, status, created_at, provider_id } = this.props.message

    return (
      <div>
        <p>To Number: {to_number}</p>
        <p>Status: {status}</p>
        <p>Sent: {(new Date(created_at)).toString()}</p>
        <p>Provider: {provider_id}</p>
      </div>
    )
  }
}

export default Detail;