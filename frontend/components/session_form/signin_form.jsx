import React from 'react';
import { Link } from 'react-router-dom';


class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitCleared: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.submitClearCheck = this.submitClearCheck.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
      this.setState({ submitCleared: this.submitClearCheck() })
    }
  };

  handleDemo(e) {
    e.preventDefault();
    let user = { email: 'jessica@uphoff.com', password: 'killercat' };
    this.handleInput('email');
    this.handleInput('password');
    this.props.login(user)
    .then(() => this.props.history.push('/account'))
  };
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.submitClearCheck()) {
        this.props.login(this.state)
      .then(() => this.props.history.push('/account'))
    }
  };

  submitClearCheck() {
    let sendStatus = true;
    let inputs = Object.values(this.state);
    
    inputs.forEach(value => {
      if (value === '') sendStatus = false;
    });
    return sendStatus;
  };

  render() {
    let error = (this.props.errors.session.length) ? (
      <p className='errors' >{this.props.errors.session[0]}</p>) : ''

    return (
      <div className='all-form' >
        <h2>Sign in</h2>
        <div className='signin-form'>
          <form onSubmit={this.handleSubmit} className='session-form' >
            <div className='inputs'>
            { error }
            <input
              className='input'
              type='text'
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder='Email address'
            />
            <input
              className='input'
              type='password'
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder='Password'
            />
            </div>
            <button className={`click-${this.state.submitCleared}`} >Sign in</button>
            <button className='demo-button' onClick={this.handleDemo} >Demo user?</button>
          </form>
          <hr className='break-line' />
          <h2>I'm new here</h2>
          <button 
            className='demo-button'
            onClick={() => this.props.history.push('/signup')}>Create an account</button>
        </div>
      </div>
    )
  }
};

export default SigninForm;