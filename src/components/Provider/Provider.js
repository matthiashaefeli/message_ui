import React, { Component } from 'react';
import './provider.scss';

export default class Provider extends Component {

  render() {
    const { name, url, active, count, load, updated_at } = this.props.provider;

    return (
      <section className='provider'>
        <h2>{name}</h2>
        <p>Url: {url}</p>
        <p>active: {active === true ? 'Yes' : 'Now'}</p>
        <p>count: {count}</p>
        <p>load: {load}</p>
        <p>Updated at: {(new Date(updated_at)).toString()}</p>
      </section>
    )
  }
}
