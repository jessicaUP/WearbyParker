import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      submitCleared: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleDemo(e) {
    e.preventDefault();
    let user = { email: 'jessica@uphoff.com', password: 'killercat' };
    this.handleInput('email');
    this.handleInput('password');
    this.props.login(user)
      .then(() => this.props.history.push('/account'))
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.submitClear()) {
      this.props.createNewUser(this.state)
        .then(() => this.props.history.push('/'))
    }
  }

  submitClear() {
    let sendStatus = true;
    let inputs = Object.values(this.state);

    inputs.forEach(value => {
      if (value === '') sendStatus = false;
    });
    return sendStatus;
  }



  render() {
    let error = (this.props.errors.session.length) ? (
      <p className='errors' >{this.props.errors.session[0]}</p>) : ''


    return (
      <div className='all-form' >
        <h2 className='session-h2'>Nice to meet you!</h2>
        <div className='signup-form'>
            <form onSubmit={this.handleSubmit} className='session-form' >
            <div className='inputs'>
            { error }
            <input
              className='input'
              type='text'
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder='First and last name'
            />
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
            <button className={`click-${this.submitClear()}`} >Create account</button>
            <button className='demo-button' onClick={this.handleDemo}>Demo user?</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;