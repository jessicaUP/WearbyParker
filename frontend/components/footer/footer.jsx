import React from 'react';
import Links from '../splash/links';


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (
      <div className='footer-cont'>
        <div className='footer-links'>
          <Links type='footer' />
        </div>
        <div className='footer-about'>
          <div className='footer-section'>
            <div className='about-group'>
              <p>LANGUAGES</p>
              <ul>
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>React/Redux</li>
                <li>HTML</li>
                <li>CSS/SASS/SCSS</li>
              </ul>
            </div>
            <div className='about-group'>
              <p>ADDITIONAL</p>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>PostgresSQL</li>
                <li>jQuery</li>
                <li>Heroku</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          <div className='footer-section'>
            <div className='about-group'>
            <p>SKILLS</p>
            <ul>
              <li>Solidworks</li>
              <li>Adobe Suite</li>
              <li>Microsoft Suite</li>
              <li>Design</li>
              <li>Fabricaiton</li>
              <li>Sales</li>
            </ul>
            </div>
          </div>
          <div className='footer-section'>
            <div className='about-group'>
              <p>EDUCATION</p>
              <ul>
                <li>Carnegie Mellon University</li>
                  <li className='sub-li'>BFA Industrial Design</li>
                <li>App Academy</li>
                <li className='sub-li'>1000+hour bootcamp</li>
              </ul>
            </div>
            <div className='about-group'>
            <p>AWARDS</p>
            <ul>
              <li>Bio-Medical Engineering</li>
                <li className='sub-li'>Design Award - 2015</li>
                <li className='sub-li'>CMU - Engineering Dept</li>
                <li>Student Research Grant (SURG)</li>
                <li className='sub-li'>Carnegie Mellon University - 2015</li>
            </ul>
            </div>
          </div>
          <div className='footer-section'>
            <div className='about-group'>
              <p>LOCATIONS</p>
              <ul>
                <li>Philadelphia</li>
                <li>New York City</li>
                <li>Remote</li>
              </ul>
            </div>
            <div className='about-group'>
              <p>HOBBIES</p>
              <ul>
                <li>Volleyball</li>
                <li>Glass-blowing</li>
                <li>Thrift shopping</li>
                <li>Nintendo 64</li>
                <li>Cats</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Footer;
