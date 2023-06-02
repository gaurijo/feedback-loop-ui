import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendFeedback } from '../apiCalls';
import './FeedbackView.css'

const FeedbackView = (props) => {
  const [feedback, setFeedback] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const submitFeedback = async e => {
    e.preventDefault();
    try {
      const { user, receiverId, updateUser } = props;
      await sendFeedback(user.id, receiverId, { feedback });
      setErrorMsg('');
      setSuccessMsg('Feedback sent!  Please return to the dashboard.');
      updateUser(user);
    } catch ({ message }) {
      setErrorMsg(message);
    }
  }

  const { name } = props;
  const isDisabled =  !feedback.trim();
  return (
    <form className="feedback-form">
      <h2>{'Feedback For'}</h2>
      <label>{name}
        {!successMsg &&
          <textarea
            type='text'
            placeholder='Feedback'
            name='feedback'
            value={feedback}
            onChange={event => setFeedback(event.target.value)}
          >
          </textarea>
        }
      </label>
      {errorMsg && <p>{errorMsg}</p>}
      {successMsg && <p>{successMsg}</p>}
      {!errorMsg && !successMsg &&
        <button className={isDisabled ? 'disabled' : ''} disabled={isDisabled} onClick={submitFeedback}>
          Submit
        </button>
      }
      {(errorMsg || successMsg) &&
        <Link to="/dashboard">
          <button>
            Back to Dashboard
          </button>
        </Link>
      }
    </form>
  )
}

export default FeedbackView;