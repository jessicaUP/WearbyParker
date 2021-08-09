import React from 'react';
import { NavLink } from 'react-router-dom';
import { FILTERS } from '../../util/filter_options';


class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''

    };

    this.updateSearch = this.updateSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);

  };

  // prepSearch = debounce(() => {
  //   this.props.updateSearch(this.state.searchInput); 
  // }, 1000);

  updateSearch(e) {
    e.preventDefault();
    this.props.fetchSearchProducts(e.currentTarget.value)
    debugger
    this.setState({ searchInput: e.currentTarget.value })

    // this.prepSearch(this.state.searchInput)

  }

  componentDidMount() {
    let { searchInput } = this.state;
    if (searchInput === '') {
      let inputEle = document.querySelector('.search-input');
      inputEle.focus();
    } 
  }

  renderProducts() {
    let { searchInput } = this.state;
    if (searchInput !== '') {
      this.props.fetchSearchProducts(searchInput)
    }
  }


  render() {
    // this.renderProducts();
    let { products } = this.props;
    debugger

    // let productsIndex = [];
    // if (searchInput !== '')
    debugger
    return (
      <div className='search-bar' >
        <button className='icon-button' onClick={() => this.props.closeModal()}>X</button>
        <h3 className='logo' id='logo-search'>SEARCH WARBY PARKER</h3>
        <input className='search-input' type="text" placeholder='Frame name' onChange={this.updateSearch} ></input>
        <hr></hr>
        <div className='results-index'>
          {products ? products.map(product =>
            <div className='search-tile' >
              <NavLink to={`/products/${product.id}/color/${product.color.id}`} colorname={product.color_name} >
              <div className='tile-image' >
                <img className={`img-${product.id}`} src={product.photo0Url} id={product.color.id} alt="" />
              </div>
              <h2 className='product-name'>{product.name}</h2>
              </NavLink>
            </div>

            ) : <></>
          }
        </div>
      </div>
    )
  }
}


export default SearchModal;