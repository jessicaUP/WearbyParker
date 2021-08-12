import React from 'react';
import { NavLink } from 'react-router-dom';
import { colorCode } from '../../util/filter_options'
import AddTryon from '../cart/add_tryon_form';

class ProductTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // check: true,
      // formCheck: props.switchOn,
      // formPage: 0,
      selectedColor: props.product.colors[0].id,
      colorName: props.product.colors[0].color_name,
      colorPhoto: props.product.colors[0].photo0Url,
      frameWidths: props.product.frameWidths,
      fwName: '',
      selectedFrameWidth: 0,
      filterColor: null,
      filterCheck: false
      // tryonIds: props.tryonIds,
      // tryon: props.switchOn,
      // tryonItem: ''


    }
    this.handleSelect = this.handleSelect.bind(this);
    this.filterCheck = this.filterCheck.bind(this);
    // this.color = this.tryonButton.bind(this);
    // this.colorSelect = this.colorSelect.bind(this);

  };

  filterCheck(filterColor) {
    this.setState({ filterCheck: true, selectedColor: filterColor })
  }


  handleSelect(colorId, colorname, colorPhoto) {
    return (e) => {
      this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto})
    }
  };

  render() {
    let { product } = this.props;
    let { selectedColor, filterCheck, filterColor } = this.state;
    const colors = Object.values(product.colors);
    if (filterColor) this.filterCheck(filterColor);
    debugger

    return (
      <div className='product-tile'>
        <NavLink to={`/products/${product.id}/color/${this.state.selectedColor}`}
           colorname={this.state.colorName}
           ><div className='tile-image' >
            <img className={`img-${product.id}`} src={this.state.colorPhoto} id={this.state.selectedColor} alt="" />
          </div></NavLink>
          <h2 className='product-name'>{product.name}</h2>
        <div className='tile-colors'>
          {product.colors.map((color, idx) => {
            return(
            <div className={`circle-highlight ${idx === 0 ? 'circle-selected' : ''}`} onClick={this.handleSelect(color.id, color.name, color.photo0Url)}>
              <input type="radio"
              className='radio-color-options'
              name={`radio-${product.id}`} 
              key={color.id}
                  defaultChecked={idx === 0}
              />  
              <div className={`select-circle ${color.id}-circle`} style={{ backgroundColor: colorCode(color.color_id) }}></div>
            </div> 
  )}) }
          
        </div>
        {/* {this.state.tryon ? <AddTryon product={product} cart={cart} color={this.state.selectedColor} createTryonItem={this.props.createTryonItem} /> : ''} */}
      </div>


    )

  }
}


export default ProductTile;
