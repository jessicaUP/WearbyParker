import React from 'react';



class SearchProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formPage: 1

    };

    this.handleClick = this.handleClick.bind(this);
    this.pageRedirect = this.pageRedirect.bind(this);

  };




  handleClick() {
    if (this.state.formPage === 1) {
      this.setState({ formPage: 2 })
    }
  }

  pageRedirect(genderId) {
    let { product, color } = this.props;
    location.assign(`http://localhost:3000/#/products/${product.id}/color/${color.id}`)
  }


  render() {
    let { product, color } = this.props;
    let { formPage } = this.state;

    let bottom;

    if (formPage === 1) {
      bottom = (
        <>
          <h2 className='product-name'>{product.name}</h2>
          <h5 className='product-color'>{color.color_name}</h5>
        </>
      )
    } else if (formPage === 2) {
      bottom = (
        <div className='shop-btn-cont'>
          <button className='selection-button' onClick={() => this.pageRedirect(1)}>Shop Women</button>
          <button className='selection-button' onClick={() => this.pageRedirect(2)}>Shop Men</button>
        </div>
      )
    }

    return (
      <div className='search-tile' onClick={this.handleClick} >
        {/* <NavLink to={`/products/${product.id}/color/${color.id}`} colorname={color.color_name} > */}
          <div className='tile-image' >
            <img className={`img-${product.id}`} src={color.photo0Url} id={color.id} alt="" />
          </div>
          {bottom}
        {/* </NavLink> */}
      </div>
    )
  }
}


export default SearchProduct;