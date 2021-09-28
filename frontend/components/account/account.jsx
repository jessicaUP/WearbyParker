import React from 'react';
import { render } from 'react-dom';

class Account extends React.Component {

  constructor(props) {
    super(props);

  }

  handleSubmit(e) {
    alert("logout")
    this.props.logout(this.state.id)
  }
  
  render() {
    let name = this.props.user.name;
    if (name) name = ` ${name.split(' ')[0]}`
    debugger
    return (
      <div className='account-container' >
        <div className='account' >
          <h2 className='session-h2 title-account' >Welcome back{name}...</h2>
          <button onClick={this.props.logout}>Sign out</button>
        </div>
      </div>
    );
  }
}

export default Account;