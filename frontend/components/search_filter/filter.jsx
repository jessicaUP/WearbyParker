import React from 'react';


class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'frameWidth',

    };

    this.update = this.update.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  };





  update() {
    return e => {
      this.setState({ filter: e.target.value })
    }
  };

  handleSelect(value) {
    return (this.state.filter === value)
  };

  render() {

    let filters = [
      { type: 'frameWidth', name: 'Frame width'},
      { type: 'shape', name: 'Shape' },
      { type: 'color', name: 'Color' },
      { type: 'material', name: 'Material' },
      { type: 'noseBridge', name: 'Nose bridge' }
    ];

   debugger
    return (
      <div className='filter-cont' >
        <div className='radio-selections' >
          {filters.map(filter => {
            return (
            <>
            <input type='radio'
              className='filter-option'
              id={`radio-${filter.type}`}
              value={filter.type}
              name={filter.type}
              onChange={this.update()}
              checked={this.handleSelect(filter.type)}
            />
            <label htmlFor={`radio-${filter.type}`} >{filter.name}</label>
            </>
            )
          })}
        </div>


      </div>
    )
  }
}


export default Filter; 