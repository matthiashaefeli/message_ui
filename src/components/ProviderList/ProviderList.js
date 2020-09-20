import React, { Component } from 'react'
import axios from 'axios';
import Provider from '../Provider/Provider'


class ProviderList extends Component {
  state = {
    isLoaded: false,
    providers: [],
    error: null
  }

  componentDidMount() {
    axios.get("https://mat-texting-service.herokuapp.com/provider").then(
      result => {
        this.setState({
          isLoaded: true,
          providers: result.data
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
    const { error, isLoaded, providers } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Is Loading.....</div>
    } else {
      return (
        <section>
          {providers
            .map(provider => (
              <Provider key={provider.id} provider={provider} />
            ))}
        </section>
      )
    }
  }
}

export default ProviderList;