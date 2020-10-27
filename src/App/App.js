import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Feedback Loop</h1>
        </header>
        <section class="main">
          <Route path="/" render={() => <LoginForm />} />
        </section>
      </div>
    );
  }
}

export default App;
