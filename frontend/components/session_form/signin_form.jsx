import React from 'react';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        email: '',
        password: ''
      },
      submitCleared: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.submitClearCheck = this.submitClearCheck.bind(this);
  };

  handleInput(type) {
    return (e) => {
      let newState = Object.assign(this.state.inputs, { [type]: e.target.value })
      this.setState({ inputs: newState });
      this.submitClearCheck();

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
    if (this.state.submitCleared) {
        this.props.login(this.state.inputs)
      .then(() => this.props.history.push('/account'))
    }
  };

  submitClearCheck() {
    let inputs = Object.values(this.state.inputs);

    debugger
    let sendStatus = inputs.every(amount => amount.length !== 0);
    this.setState({ submitCleared: sendStatus })
  };

  render() {
    let error = (this.props.errors.session.length) ? (
      <p className='errors' >{this.props.errors.session[0]}</p>) : ''

    let clickCheck = this.state.submitCleared;
    return (
      <div className='all-form' >
        <h2 className='session-h2'>Sign in</h2>
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
            <button className={`click-${clickCheck} blue-button`} >Sign in</button>
            <button className='demo-button' onClick={this.handleDemo} >Demo user?</button>
          </form>
          <hr className='break-line' />
          <h2 className='session-h2' id='new-here'>I'm new here</h2>
          <button 
            className='demo-button'
            onClick={() => this.props.history.push('/signup')}>Create an account</button>
        </div>
      </div>
    )
  }
};

export default SigninForm;