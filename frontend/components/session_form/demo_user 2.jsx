// import React from 'react';

// class DemoUser extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: 'uphoff.jessica@gmail.com',
//       password: 'wearbyparker'
//     }
    
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.login(this.state)
//       .then(() => this.props.history.push('/'))
//   }

//   render() {
//     return (
//       <>
//       <button
//         className='demo-button' 
//         // type='submit' 
//         onClick={this.handleSubmit}>Demo user?</button>
//       </>
//     )
//   }
// };

// export default DemoUser;