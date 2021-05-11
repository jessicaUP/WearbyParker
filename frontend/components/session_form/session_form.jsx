import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handelSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state)
      .then(() => this.props.history.push('/account'))
  }

  render() {
    const { formType } = this.props;
    let header = formType === 'Create account' ? 'Nice to meet you!' : formType;
    let name = null;
    if (formType === 'Create account') {
      name = (
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleInput('name')}
          placeholder='First and last name'
        />
      );
    } 

    return (
      <div className='session-form'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h2>{header}</h2>
          {name}
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleInput('name')}
            placeholder='First and last name'
          />
        <br/>
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleInput('email')}
            placeholder='Email address'
          />
        <br />
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder='Password'
          />
        <br />
          <button
            type='submit'
            className='sessionButton'>
          {this.props.formType}
          </button>
        </form>


      </div>

    )
  }
}

export default SessionForm;