import React from 'react';
import './Teammate.css';

const Teammate = ({ email, id, image, name }) => {

  return (
    <li>
      <img src={image} alt='' />
      <p>{name}</p>
      <p>{email}</p>
    </li>
  )
}

export default Teammate;