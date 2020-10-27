import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    }
  }

  updateForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateInputs() {
    const { username, password } = this.state;
    return !!(username.trim() && password.trim());
  }

  login = e => {
    e.preventDefault();
    if (this.validateInputs()) {
      this.setState({ username: '', password: '', errorMsg: '' });
    } else {
      this.setState({ errorMsg: 'Please fill out both inputs.' })
    }
  }



  render() {
    const { username, password, errorMsg } = this.state;
    return (
      <form>
        <h2>Sign In</h2>
        <label>
          Username
        <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={this.updateForm}
          />
        </label>
        <label>
          Password
        <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.updateForm}
          />
        </label>
        <p>{errorMsg && errorMsg}</p>
        <button onClick={this.login}>Login</button>
      </form>
    )
  }
}