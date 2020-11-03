import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard'
import { getTeammates } from '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  updateUser = async user => {
    try {
      const { teammates } = await getTeammates(user.id);
      user.team = teammates;
      this.setState({ user });
    } catch (e) {
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Feedback Loop</h1>
        </header>
        <section className="main">
          <Route exact path='/' render={() => <LoginForm updateUser={this.updateUser} />} />
          <Route exact path='/dashboard' render={() => <Dashboard {...user} />} />
        </section>
      </div>
    );
  }
}

export default App;
