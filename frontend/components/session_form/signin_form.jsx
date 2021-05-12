import React from 'react';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    debugger
    console.log(e)
    e.preventDefault();
    this.props.login(this.state)
      // .then(() => this.props.history.push('/'))
  }

  // guestDemoLogin() {

  //   return (
  //     <div className="demo-login">
  //       <button onClick={this.}>Guest Demo Login</button>
  //     </div>
  //   )
  // }

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
          <button onClick={this.handleSubmit} >Sign in</button>
        </form>
      </div>
      </>
    )
  }
}

export default SigninForm;