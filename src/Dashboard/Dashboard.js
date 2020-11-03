import React, { Component } from 'react';
import Teammate from '../Teammate/Teammate';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    const { image, name, team } = this.props;
    const teammates = team && team.map(member => <Teammate key={`teammate-${member.id}`} {...member} />)
    return (
      <section className="dashboard">
        <section className="feedback">

        </section>
        <section className="team">
          <ul>
            {teammates}
          </ul>
        </section>
      </section>
    )
  }
}