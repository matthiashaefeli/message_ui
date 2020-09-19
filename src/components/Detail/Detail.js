import React, { Component } from 'react'

class Detail extends Component {
  render() {
    console.log(this.props)
    const { to_number, status, created_at, provider_id } = this.props.message

    return (
      <div>
        <p>To Number: {to_number}</p>
        <p>Status: {status}</p>
        <p>Sent: {created_at}</p>
        <p>Provider: {provider_id}</p>
      </div>
    )
  }
}

export default Detail;