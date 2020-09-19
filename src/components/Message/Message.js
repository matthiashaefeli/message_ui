import React, { Component } from 'react';
import axios from 'axios';

class Message extends Component {
  state = {
    error: null,
    isLoaded: false,
    messages: []
  }

  componentDidMount() {
    axios.get("https://mat-texting-service.herokuapp.com/message").then(
      result => {
        this.setState({
          isLoaded: true,
          messages: result.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    );
  }

  render() {
    const { error, isLoaded, messages } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Is Loading.....</div>
    } else {
      return (
        <section>
          {messages.map(message => (
            <article key={message.id}>
              <p>{message.message}</p>
            </article>
          ))}
        </section>
      )
    }
  }
}

export default Message;