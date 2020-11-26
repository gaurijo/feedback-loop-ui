import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sendFeedback } from '../apiCalls';
import './FeedbackView.css'

export default class FeedbackView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      successMsg: '',
      errorMsg: '',
      redirect: false
    }
  }

  updateForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitFeedback = async e => {
    e.preventDefault();
    try {
      const { user, receiverId, updateUser } = this.props;
      const { feedback } = this.state;
      await sendFeedback(user.id, receiverId, { feedback });
      this.setState({ errorMsg: '', successMsg: 'Feedback sent!  Please return to the dashboard.' })
      updateUser(user);
    } catch ({ message }) {
      this.setState({ errorMsg: message })
    }
  }

  render() {
    const { name } = this.props;
    const { feedback, errorMsg, successMsg } = this.state;
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
              onChange={this.updateForm}
            >
            </textarea>
          }
        </label>
        {errorMsg && <p>{errorMsg}</p>}
        {successMsg && <p>{successMsg}</p>}
        {!errorMsg && !successMsg &&
          <button className={isDisabled ? 'disabled' : ''} disabled={isDisabled} onClick={this.submitFeedback}>
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
}