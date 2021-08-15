import React from 'react';
import { Link } from 'react-router-dom';


class Links extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let header, message;

    switch (this.props.type) {
      case 'footer':
        header = <h2 className='product-name'>Need a Software Engineer?</h2>;
        message = <p className='message-foot' id='link-message' >Checkout my links below and get in touch by email at uphoff.jessica@gmail.com!</p>;
        break;
      case 'thanks':
        header = <h2 className='product-name'>Thanks for exploring!</h2>;
        message = <p className='message-foot' id='link-message' >See links below for more information or continue looking around Wearby Parker</p>;
        break;
    }

    return (
      <div className='footer-links'>
        {header}
        {message}
        <div className='footer-icons'>
          <a href="https://www.jessicauphoff.com" target="_blank">
            <i class="fas fa-user-alt fa-2x"></i>
            <p>Personal</p>
          </a>
          <a href="https://www.linkedin.com/in/jessica-uphoff-b2584b69/" target="_blank">
            <i class="fab fa-linkedin-in fa-2x"></i>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/jessicaUP/WearbyParker" target="_blank">
            <i class="fab fa-github fa-2x"></i>
            <p>Github</p>
          </a>
          <a href="https://angel.co/u/jessica-uphoff" target="_blank">
            <i class="fab fa-angellist fa-2x"></i>
            <p>AngelList</p>
          </a>
          <a href="mailto:uphoff.jessica@gmail.com?subject=Looking to connect!" target="_blank">
            <i class="fas fa-paper-plane fa-2x"></i>
            <p>Email</p>
          </a>
        </div>
      </div>
    )
  }
}

export default Links;
