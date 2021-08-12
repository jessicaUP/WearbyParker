import React from 'react';
import { NavLink } from 'react-router-dom';
import { FILTERS } from '../../util/filter_options';
import SearchProduct from './search_product';


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
    // e.preventDefault();
    this.props.fetchSearchProducts(e.currentTarget.value)
      .then(this.setState({ searchInput: e.currentTarget.value }))

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
    let { searchInput } = this.state;
    let message = ''

    if (products && searchInput === '') {
      products = []
    } else if (!products || products.length === 0) {
      if (searchInput !== '') {
        message = (
          <div className='no-search-cont'>
            <p className='no-search'>Hm. Doesn’t look like we carry a frame by that name.</p>
          </div>
        )
      }
    }
    

    return (
      <div className='search-bar' >
        <button className='icon-button' onClick={() => this.props.closeModal()}>X</button>
        <h3 className='logo' id='logo-search'>SEARCH WARBY PARKER</h3>
        <input className='search-input' type="text" placeholder='Frame name' onChange={this.updateSearch} ></input>
        <hr></hr>
        <div className='results-index'>
          {products ? products.map(product => 
            product.colors.map(color => 
              <SearchProduct product={product} color={color} />
              )) : <></>  
          }
        </div>
          {message}
      </div>
    )
  }
}


export default SearchModal;