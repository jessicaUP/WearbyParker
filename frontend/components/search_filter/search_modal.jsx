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
    this.combineProduct = this.combineProduct.bind(this);

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

  combineProduct(products) {
    let combined = {};
    let men = [];
    let women = [];
    products.forEach(product => { product.gender_id === 1 ? women.push(product) : men.push(product) })
    women.forEach(product => {
      let colorStep = {}; 
      product.colors.forEach(color => {
        colorStep[color.color.id] = { womenColor: color.id, color_name: color.color_name, photo0Url: color.photo0Url }
      })
      combined[product.name] = {
        colors: colorStep,
        gender_id: product.gender_id,
        id: product.id,
        name: product.name
      };
    })
    men.forEach(product => {
      product.colors.forEach(color => {
        combined[product.name]['colors'][color.color.id]['menColor'] = color.id
      })
      combined[product.name]['menId'] = product.id;
    })
    
    let final = Object.values(combined);
    final.forEach(product => { product['colors'] = Object.values(product['colors']) });

    return final;
  }


  render() {
    // this.renderProducts();
    let { products } = this.props;
    let { searchInput } = this.state;
    let message = '';
    let finalProducts = [];

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
    } else if (products) {
      finalProducts = this.combineProduct(products);
    }

    // let productElements = ''
    // if ( finalProducts[0] ) {
    //   productElements = finalProducts.map(product1 => {
    //     let menInfo;
    //     finalProducts[1].forEach(product2 => {
    //       if (product1.name === product2.name) {
    //         menInfo = product
    //       }
    //     });
    //     return (
    //       product.colors.map(color => {
    //         return (
    //           <SearchProduct product={product} color={color} closeModal={this.props.closeModal} menInfo={menInfo}/>
    //         )
    //       })
    //     )
    //   })
    // }

    return (
      <div className='search-bar' >
        <button className='icon-button' onClick={() => this.props.closeModal()}>X</button>
        <h3 className='logo' id='logo-search'>SEARCH WARBY PARKER</h3>
        <input className='search-input' type="text" placeholder='Frame name' onChange={this.updateSearch} ></input>
        <hr></hr>
        <div className='results-index'>
          {finalProducts ? finalProducts.map(product => {
            return (
              product.colors.map(color =>
                <SearchProduct product={product} color={color} closeModal={this.props.closeModal} />
              )
            )
            }) : <></>  
          }
        </div>
          {message}
      </div>
    )
  }
}


export default SearchModal;