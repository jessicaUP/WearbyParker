import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'))
  }

  handleDemo(e) {
    e.preventDefault();
    let user = { email: 'uphoff.jessica@gmail.com', password: 'wearbyparker' };
    this.handleInput('email');
    this.handleInput('password');
    this.props.login(user)
      .then(() => this.props.history.push('/account'))
  }

  render() {

    return (
      <>
      <h2>Nice to meet you!</h2>
      <div className='signup-form'>
          <form onSubmit={this.handleSubmit} className='session-form' >
          <div className='inputs'>
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
          <button >Create account</button>
          <button className='demo-button' onClick={this.handleDemo}>Demo user?</button>
        </form>
      </div>
      </>
    )
  }
}

export default SignupForm;