import React, { Component } from 'react';
import axios from 'axios';
import './messageList.scss'
import Message from '../Message/Message';

class MessageList extends Component {
  state = {
    error: null,
    isLoaded: false,
    messages: [],
    numberSearch: ''
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

  handleOnChange(e) {
    this.setState({
      numberSearch: e.target.value
    })
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
          <input
            type='text'
            placeholder='Search By Number'
            onChange={this.handleOnChange.bind(this)}
            value={this.state.numberSearch}
            className='searchInput'
          />
          {messages
            .filter(message => message.to_number.slice(0, this.state.numberSearch.length) === this.state.numberSearch)
            .map(message => (
              <Message key={message.id} message={message} />
            ))}
        </section>
      )
    }
  }
}

export default MessageList;