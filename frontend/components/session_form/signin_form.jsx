import React from 'react';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestDemoLogin = this.guestDemoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    // e.preventDefault();
    alert("Submitted")
    this.props.login(this.state)
  }

  guestDemoLogin() {
    this.setState = {
      email: 'user@me.com',
      password: 'password123'
    };
  }

  render() {
    console.log(this.state)
    console.log(this.props)

    return (
      <>
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
        </form>
        <button className='demo' onClick={this.guestDemoLogin}>DEMO USER</button>
      </div>
      </>
    )
  }
}

export default SigninForm;