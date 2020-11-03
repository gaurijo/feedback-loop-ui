import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../apiCalls';
import './LoginForm.css';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      redirect: false
    }
  }

  updateForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateInputs() {
    const { email, password } = this.state;
    return !!(email.trim() && password.trim());
  }

  signInUser = async e => {
    e.preventDefault();
    if (this.validateInputs()) {
      try {
        const { email, password } = this.state;
        const user = await login({ email, password });
        this.props.updateUser(user);
        this.setState({ redirect: true });
      } catch (e) {
        this.setState({ email: '', password: '', errorMsg: 'Email and password do not match.  Try again.' });
      }
    } else {
      this.setState({ errorMsg: 'Please fill out both inputs.' })
    }
  }



  render() {
    const { email, password, errorMsg, redirect } = this.state;
    if (redirect) {
      return <Redirect push to="/dashboard" />;
    }
    return (
      <form>
        <h2>Please Sign In</h2>
        <label>
          Email
        <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
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
          <button onClick={this.signInUser}>
            Login
          </button>
      </form>
    )
  }
}