import React from 'react';
import { FILTERS } from '../../util/filter_options';


class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'frame_width',
      count: 0,
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
    this.resetFilters = this.resetFilters.bind(this);

  };


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
          let selectedFilters = this.state.selectedFilters[idType]
          return (
            <>
              <button className={`option-btn ${idType}-${optionId} ${selectedFilters.includes(optionId) ? 'filter-btn-selected' : ''}`} id={`${idType}-btn`} onClick={this.addFilter(idType, optionId)} >
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

      // let filterBtn = document.querySelector('.filter-icon')
      //   filterBtn.classList.add('filter-icon-on')

      
      this.props.fetchGenderSearchProducts({ genderId: this.props.genderId, filters: selectedFilters });
      this.setState({ selectedFilters, count: nextCount});
    }
  }

  resetFilters() {
    return e => {
      this.props.fetchGenderProducts(this.props.genderId)
      let buttonElements = document.querySelectorAll(`.highlight`);
      buttonElements.forEach(ele => ele.classList.remove('highlight'))

      // let filterBtn = document.querySelector('.filter-icon')
      // filterBtn.classList.remove('filter-icon-on')
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
    let selectedOptions = this.typeSearch(filter);

    return (
      <div className='filter-cont' >
        <div className='radio-selections' >
          {FILTERS.map(filterObj => {
            let { type, name } = filterObj;
            let inputSelect = type === filter ? inputSelect = 'input-highlight' : ''
            return (
              <>
            <div className='filter-name-cont'>
            <input type='radio'
              className='filter-option'
              id={`radio-${type}`}
              value={type}
              name={type}
              onChange={this.update()}
              checked={this.handleSelect(type)}
            />
            <label className={`input-filter-name ${inputSelect}`} htmlFor={`radio-${type}`} >{name}</label>
            </div>
            </>
            )
          })}
        </div>
          {this.filterOptions(selectedOptions)}
          <div className='items-selected' >
          <button className='selection-button filter-reset-amount filter-reset' >{this.props.totalCount} frames</button>
            <div className='reset-cont' >
              <div className={`circle ${count === 1 ? 'grey-circle' : ''}`} id='reset-circle'>{count}</div>
            <button className='selection-button filter-reset' onClick={this.resetFilters()} >Reset</button>
            </div>
          </div>
      </div>
    )
  }
}


export default Filter; 