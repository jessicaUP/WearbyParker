import React from 'react';
import { Link } from 'react-router-dom';


class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/account'))
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
    console.log(this.state)
    console.log(this.props)

    return (
      <div className='all-form' >
        <h2>Sign in</h2>
        <div className='signin-form'>
          <form className='session-form' >
            <div className='inputs'>
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
            <button onClick={this.handleSubmit}>Sign in</button>
            <button className='demo-button' onClick={this.handleDemo}>Demo user?</button>
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
}

export default SigninForm;