import React from 'react';
import { FILTERS } from '../../util/filter_options';


class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


    };


  };

  componentDidMount() {
    let inputEle = document.querySelector('.search-input')
    inputEle.focus();
  }


  render() {

    return (
      <div className='search-bar' >
        <button className='icon-button' onClick={() => this.props.closeModal()}>X</button>
        <h3 className='logo' id='logo-search'>SEARCH WARBY PARKER</h3>
        <input className='search-input' type="text" placeholder='Frame name' onChange={this.updateState} onFocus={this.searchingTime}></input>
        <hr></hr>
        <div className='results-index'>
        </div>
      </div>
    )
  }
}


export default SearchModal;