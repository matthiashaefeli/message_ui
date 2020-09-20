import React, { Component } from 'react';
import axios from 'axios';
import './provider.scss';

export default class Provider extends Component {
  state = {
    editActive: false,
    editLoad: false,
    loadUpdateValue: '',
  }

  handleLoadUpdate(e) {
    this.setState({
      loadUpdateValue: e.target.value
    })
  }

  handleLoadEdit() {
    this.setState({
      editLoad: !this.state.editLoad
    })
  }

  handleActiveEdit() {
    this.setState({
      editActive: !this.state.editActive
    })
  }

  loadUpdate(data) {
    axios({
      method: 'post',
      url: 'https://mat-texting-service.herokuapp.com/update_provider',
      data: data
    }).then((res) => {
      window.location.reload(false);
    }).catch(function (error) {
      console.log(error)
    })
  }

  render() {
    const { name, url, active, count, load, updated_at, id } = this.props.provider;
    const { editLoad, editActive, loadUpdateValue } = this.state
    let loadInput
    let activeInput

    if (editLoad) {
      loadInput =
        <div className='updateFields'>
          <input
            type='number'
            placeholder={load}
            onChange={this.handleLoadUpdate.bind(this)}
            value={loadUpdateValue}
            className='inputField'
          />
          <button
            type='submit'
            onClick={() => this.loadUpdate({ id: id, load: loadUpdateValue })}>
            save
          </button>
        </div>
    } else {
      loadInput = null
    };

    if (editActive) {
      activeInput =
        <div className='updateFields'>
          <button type='submit'
            value=''
            onClick={() => this.loadUpdate({ id: id, active: !active })}>
            Change Status
          </button>
        </div >
    } else {
      activeInput = null
    }

    return (
      <section className='provider'>
        <h2>{name}</h2>
        <p>Url: {url}</p>
        <p>
          <i className="far fa-edit providerEdit" onClick={this.handleActiveEdit.bind(this)}></i>
          &nbsp;Status: {active === true ? 'Enabled' : 'Disabled'}
        </p>
        {activeInput}
        <p>
          <i className="far fa-edit providerEdit" onClick={this.handleLoadEdit.bind(this)}></i>
          &nbsp;Load: {load}
        </p>
        {loadInput}
        <p>Count: {count}</p>
        <p>Updated at: {(new Date(updated_at)).toString()}</p>
      </section>
    )
  }
}
