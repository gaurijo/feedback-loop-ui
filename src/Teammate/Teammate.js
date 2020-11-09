import React from 'react';
import { withRouter } from 'react-router';
import './Teammate.css';
import greenCheck from '../assets/green-check.png'
import redX from '../assets/red-x.png';

const Teammate = ({ email, id, image, name, delivered, history }) => {
  return (
      <tr onClick={() => history.push(`/feedback/${id}`)}>
        <td>
          <img className="profile" src={image} alt='' />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <img className="complete" src={delivered ? greenCheck : redX} />
        </td>
      </tr>
  )
}

export default withRouter(Teammate);