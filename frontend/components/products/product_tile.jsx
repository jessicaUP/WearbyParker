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
      filterCheck: true
      // tryonIds: props.tryonIds,
      // tryon: props.switchOn,
      // tryonItem: ''


    }
    this.handleSelect = this.handleSelect.bind(this);
    this.imageFilter = this.imageFilter.bind(this);
    // this.filterCheck = this.filterCheck.bind(this);
    // this.color = this.tryonButton.bind(this);
    // this.colorSelect = this.colorSelect.bind(this);

  };

  // filterCheck(filterColor) {
  //   this.setState({ filterCheck: true, selectedColor: filterColor })
  // }

  imageFilter() {
    let productEles = document.getElementsByClassName('.tile-colors');
    productEles.forEach(element => {
      element[0].click();
        });
    this.setState({filterCheck: false})
    
  }


  handleSelect(colorId, colorname, colorPhoto) {
    return () => {
      // e.prevetDefault();
      this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto})
    }
  };

  render() {
    let { product } = this.props;
    let { selectedColor, filterCheck, filterColor, colorPhoto, colorName } = this.state;
    const colors = Object.values(product.colors);
    if (filterColor && filterCheck) this.imageFilter();


    return (
      <div className='product-tile'>
        <NavLink to={`/products/${product.id}/color/${selectedColor}`}
           colorname={colorName}
           ><div className='tile-image' >
            <img className={`img-${product.id}`} src={`${colorPhoto}#${new Date().getTime()}`} id={selectedColor} alt="" />
          </div></NavLink>
          <h2 className='product-name'>{product.name}</h2>
        <div className='tile-colors'>
          {product.colors.map((color, idx) => {
            // let { selectedColor } = this.state;
            return(
            <div className={`circle-highlight ${color.id === selectedColor ? 'circle-selected' : ''}`} 
              key={`${color.id}-${selectedColor}`}
              onClick={this.handleSelect(color.id, color.name, color.photo0Url)}
              >
              <input type="radio"
              className='radio-color-options'
              name={`radio-${product.id}`} 
              key={color.id}
              defaultChecked={color.id === selectedColor}
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
