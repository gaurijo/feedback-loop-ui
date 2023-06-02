import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard'
import FeedbackView from '../FeedbackView/FeedbackView'
import { getTeammates, getFeedback, getAdditionalInfo } from '../apiCalls';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const updateUser = async user => {
    try {
      const { teammates } = await getTeammates(user.id);
      const { feedback } = await getFeedback(user.id);
      const updatedFeedback = await getAdditionalInfo(feedback);
      setUser({ ...user, team: teammates, feedback: updatedFeedback })
    } catch (e) {
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Feedback Loop</h1>
      </header>
      <section className="main">
        <Route exact path='/' render={() => <LoginForm updateUser={updateUser} />} />
        <Route exact path='/dashboard' render={() => <Dashboard {...user} />} />
        <Route exact path='/feedback/:id' render={({ match }) => {
          const { id } = match.params;
          const foundTeammate = user.team.find(teammate => teammate.id === parseInt(id));
          return <FeedbackView
            user={user}
            receiverId={foundTeammate.id}
            name={foundTeammate.name}
            updateUser={updateUser}
          />
        }} />
      </section>
    </div>
  );
}

export default App;
