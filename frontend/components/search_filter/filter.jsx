import React from 'react';
<<<<<<< HEAD
import { FILTERS } from '../../util/filter_options';
=======
import { 
  FILTERS,
  frameWidthOptions,
  shapeOptions,
  colorOptions,
  materialOptions,
  noseBridgeOptions
 } from '../../util/filter_options';
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a


class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      filter: 'frame_width',
      count: 0,
      selectedFilters: {
        frame_width: [],
        shape: [],
        color: [],
        material: [],
        nose_bridge: []
      }
=======
      filter: 'frameWidth',
      selectedFilters: {}
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

    };

    this.update = this.update.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    this.typeSearch = this.typeSearch.bind(this);
<<<<<<< HEAD
    this.addFilter = this.addFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

  };


<<<<<<< HEAD
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
=======
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
      case 'frameWidth':
        return FILTERS[0];
        case 'shape':
        return FILTERS[1];
        case 'color':
        return FILTERS[2];
        case 'material':
        return FILTERS[3];
        case 'noseBridge':
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
        return FILTERS[4];
    }
  }

  filterOptions(filter) {
    let idType = filter.type
    return (
      <div className='options-cont' id={`${idType}-options`}>
        {filter.options.map((option) => {
<<<<<<< HEAD
          let { name, type, image, desc, color, optionId } = option;
=======
          let { name, type, image, desc, color } = option;
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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
<<<<<<< HEAD
              <button className={`option-btn ${idType}-${optionId}`} id={`${idType}-btn`} onClick={this.addFilter(idType, optionId)} >
=======
              <button className='option-btn' id={`${idType}-btn`}>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
                {imageEle}
                {colorEle}
                <input type='checkbox'
                  className='filter-i'
                  id={type}
                  value={type}
                  name={type}
<<<<<<< HEAD
                  // onChange=
=======
                // onChange=
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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

<<<<<<< HEAD
  addFilter(type, selection) {
    
    return (e) => {
      // e.preventDefault();
      let { selectedFilters, count } = this.state;
      let buttonEle = document.querySelector(`.${type}-${selection}`);
      let nextCount;
      // let filterArr = selectedFilters[type]
      if (selectedFilters[type].includes(selection)) {
        let idx = selectedFilters[type].indexOf(selection);
        selectedFilters[type].splice(idx, 1);
        nextCount = count - 1
        buttonEle.classList.remove('highlight')
      } else {
        if (type === 'color' && selectedFilters['color'].length === 0) {
          this.props.colorSelect(selection)
        }
        selectedFilters[type].push(selection);
        nextCount = count + 1
        buttonEle.classList.add('highlight')
      }
      
      this.props.fetchGenderSearchProducts({ genderId: this.props.genderId, filters: selectedFilters });
      this.setState({ selectedFilters, count: nextCount});
    }
  }

  resetFilters() {
    return e => {
      this.props.fetchGenderProducts(this.props.genderId)
      let buttonElements = document.querySelectorAll(`.highlight`);
      buttonElements.forEach(ele => ele.classList.remove('highlight'))
      this.setState({
        count: 0,
        selectedFilters: {
          frame_width: [],
          shape: [],
          color: [],
          material: [],
          nose_bridge: []
        }})
    }
  }

  render() {
    let { filter, count } = this.state
=======
  render() {

    let { filter } = this.state
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    let selectedOptions = this.typeSearch(filter);

    return (
      <div className='filter-cont' >
        <div className='radio-selections' >
<<<<<<< HEAD
          {FILTERS.map(filterObj => {
            let { type, name } = filterObj;
            let inputSelect = type === filter ? inputSelect = 'input-highlight' : ''
=======
          {FILTERS.map(filter => {
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
            return (
              <>
            <div className='filter-name-cont'>
            <input type='radio'
              className='filter-option'
<<<<<<< HEAD
              id={`radio-${type}`}
              value={type}
              name={type}
              onChange={this.update()}
              checked={this.handleSelect(type)}
            />
            <label className={`input-filter-name ${inputSelect}`} htmlFor={`radio-${type}`} >{name}</label>
=======
              id={`radio-${filter.type}`}
              value={filter.type}
              name={filter.type}
              onChange={this.update()}
              checked={this.handleSelect(filter.type)}
            />
            <label htmlFor={`radio-${filter.type}`} >{filter.name}</label>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
            </div>
            </>
            )
          })}
        </div>
          {this.filterOptions(selectedOptions)}
          <div className='items-selected' >
<<<<<<< HEAD
          <button className='selection-button filter-reset-amount filter-reset' >{this.props.totalCount} frames</button>
            <div className='reset-cont' >
              <div className='circle' >{count}</div>
            <button className='selection-button filter-reset' onClick={this.resetFilters()} >Reset</button>
=======
            <p>frames</p>
            <div className='reset-cont' >
              <div className='circle' >0</div>
              <p>Reset</p>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
            </div>
          </div>
      </div>
    )
  }
}


export default Filter; 