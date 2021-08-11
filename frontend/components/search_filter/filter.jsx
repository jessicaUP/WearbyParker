import React from 'react';
import { FILTERS } from '../../util/filter_options';


class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'frame_width',
      selectedFilters: {
        frame_width: [],
        shape: [],
        color: [],
        material: [],
        nose_bridge: []
      }

    };

    this.update = this.update.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    this.typeSearch = this.typeSearch.bind(this);
    this.addFilter = this.addFilter.bind(this);

  };


  // handleOptions(filter) {
  //   switch (filter.type) {
  //     case 'frameWidth':
  //       return (
  //         <div className='opitons-cont' id='fw-options'>
  //           {frameWidthOptions.map((option) => {
  //             return (
  //               <button className='option-btn' >{option}</button>
  //             )
  //           })}
  //         </div>
  //       )
  //     case 'shape':
  //       return (
  //         <div className='opitons-cont' id='fw-options'>
  //           {shapeOptions.map((option) => {
  //             let image = option.split('-').join('').toLowerCase();
  //             return (
  //               <>
  //               <button className='option-btn' >
  //                 <img src={window[image]} alt='type-of-eyewear' className='shape-img' />
  //                 <input type='checkbox'
  //                   className='filter-i'
  //                   id={`radio-${option.toLowerCase()}`}
  //                   value={option.toLowerCase()}
  //                   name={option.toLowerCase()}
  //                   // onChange=
  //                 />
  //                 <label htmlFor={`radio-${option.toLowerCase()}`} >{option}</label>
  //                   {/* <button className='option-btn' >{option}</button> */}
  //               </button>
  //             </>
  //             )
  //           })}
  //         </div>
  //       )
  //   }
  // };

  typeSearch(label) {
    switch (label) {
      case 'frame_width':
        return FILTERS[0];
      case 'shape':
        return FILTERS[1];
      case 'color':
        return FILTERS[2];
      case 'material':
        return FILTERS[3];
      case 'nose_bridge':
        return FILTERS[4];
    }
  }

  filterOptions(filter) {
    let idType = filter.type
    return (
      <div className='options-cont' id={`${idType}-options`}>
        {filter.options.map((option) => {
          let { name, type, image, desc, color, optionId } = option;
          let imageEle = '';
          let descEle = '';
          let colorEle = '';
          if (image) {
            imageEle = <img src={window[type]} alt='type-of-eyewear' className='filter-img' />
          } else if (desc) {
            descEle = <p className='option-desc' >{desc}</p>
          } else if (color) {
            colorEle = <div className='circle' style={{ backgroundColor: color }} id='color-circle' ></div>
          }

          return (
            <>
              <button className='option-btn' id={`${idType}-btn`} onClick={this.addFilter(idType, optionId)} >
                {imageEle}
                {colorEle}
                <input type='checkbox'
                  className='filter-i'
                  id={type}
                  value={type}
                  name={type}
                  // onChange=
                />
                <label htmlFor={type} >{name}
                {descEle}
                </label>
              </button>
            </>
          )
        })}
      </div>
    )
  }



  update() {
    return e => {
      this.setState({ filter: e.target.value })
    }
  };

  handleSelect(value) {
    return (this.state.filter === value)
  };

  addFilter(type, selection) {

    return (e) => {
      // e.preventDefault();
      let { selectedFilters } = this.state;
      // let filterArr = selectedFilters[type]
      if (selectedFilters[type].includes(selection)) {
        let idx = selectedFilters[type].indexOf(selection);
        selectedFilters[type].splice(idx, 1);
      } else {
        selectedFilters[type].push(selection);
      }
      debugger
      this.props.fetchGenderSearchProducts({ genderId: this.props.genderId, filters: selectedFilters });
      this.setState(selectedFilters);
    }
  }

  render() {
    let { filter } = this.state
    let selectedOptions = this.typeSearch(filter);

    return (
      <div className='filter-cont' >
        <div className='radio-selections' >
          {FILTERS.map(filter => {
            return (
              <>
            <div className='filter-name-cont'>
            <input type='radio'
              className='filter-option'
              id={`radio-${filter.type}`}
              value={filter.type}
              name={filter.type}
              onChange={this.update()}
              checked={this.handleSelect(filter.type)}
            />
            <label htmlFor={`radio-${filter.type}`} >{filter.name}</label>
            </div>
            </>
            )
          })}
        </div>
          {this.filterOptions(selectedOptions)}
          <div className='items-selected' >
            <p>frames</p>
            <div className='reset-cont' >
              <div className='circle' >0</div>
              <p>Reset</p>
            </div>
          </div>
      </div>
    )
  }
}


export default Filter; 