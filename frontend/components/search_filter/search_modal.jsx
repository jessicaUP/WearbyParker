import React from 'react';
import { FILTERS } from '../../util/filter_options';


class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


    };


  };


  render() {


    return (
      <div className='search-bar' >
        <input className='search-input' type="text" placeholder='Frame name' onChange={this.updateState} onFocus={this.searchingTime}></input>
        <div className='results-index'>
          <h2>MODAL WORKS</h2>
        </div>
      </div>
    )
  }
}


export default SearchModal;