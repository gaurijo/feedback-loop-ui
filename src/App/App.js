import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard'
import { getTeammates, getFeedback, getAdditionalInfo } from '../apiCalls';
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
      const { feedback } = await getFeedback(user.id);
      const updatedFeedback = await getAdditionalInfo(feedback);
      this.setState({ user: { ...user, team: teammates, feedback: updatedFeedback } });
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
          <Route exact path='/feedback/:id' render={({ match }) => {
            const { id } = match.params;
            const foundTeammate = user.team.find(teammate => teammate.id == id);
            console.log(foundTeammate);
            // <FeedbackView />
          }
          } />
        </section>
      </div>
    );
  }
}

export default App;
