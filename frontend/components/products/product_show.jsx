import React from 'react';
import AddItemForm from '../cart/add_item_form';
<<<<<<< HEAD
import { colorCode } from '../../util/filter_options';
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a


class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      currentPhoto: 1,
=======
      currentPhoto: 'photo1',
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      colorId: props.match.params.colorId,
      currentColor: null,
      colorCheck: false
    };
  
    this.handlePhoto = this.handlePhoto.bind(this)
    this.handleClick = this.handleClick.bind(this)
<<<<<<< HEAD
    this.arrowClick = this.arrowClick.bind(this)
    this.changeColor = this.changeColor.bind(this)
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
  };

  componentDidMount() {
    this.props.fetchProduct(parseInt(this.props.match.params.productId))
    this.setState({ currentCheck: true })
  };

  handlePhoto(num) {
    return (e) => {
<<<<<<< HEAD
      this.changeColor(num)
      this.setState({ currentPhoto: parseInt(e.currentTarget.value) });
=======
      let background = document.querySelector(".top");
      let image = document.querySelector(".scroll-picture");
      this.setState({ currentPhoto: e.currentTarget.value });
      if (num === 2) {
        background.style.backgroundColor = "rgba(43, 52, 62, .03)"
        image.style.width = "112%";
      } else {
        background.style.backgroundColor = "white"
        image.style.width = "75%";
      }
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    }
  };

  handleClick(colorId, colorName) {
    return (e) => {
      this.setState({ colorId: colorId, currentColor: colorName });
    }
  };

<<<<<<< HEAD
  changeColor(num) {
    let background = document.querySelector(".top");
    let image = document.querySelector(".scroll-picture");
    if (num === 2) {
      background.style.backgroundColor = "rgba(43, 52, 62, .03)"
      image.style.width = "112%";
    } else {
      background.style.backgroundColor = "white"
      image.style.width = "75%";
    }
  }

  arrowClick(direction) {
    return () => {
      let nextPhoto = this.state.currentPhoto;

      switch (direction) {
        case 'right':
          if (nextPhoto === 4) nextPhoto = 0;
          nextPhoto = nextPhoto + 1;
          this.changeColor(nextPhoto)
          break;
          case 'left':
            if (nextPhoto === 1) nextPhoto = 5;
            nextPhoto = nextPhoto - 1;
            this.changeColor(nextPhoto)
          break;
      }
      this.setState({ currentPhoto: nextPhoto });

    }
  }

  render() {
    let { product } = this.props;
    let { currentColor, colorId, currentPhoto } = this.state;
    if (!product) {
      return null;
    } else if (!currentColor) {
      product.colors.forEach(color => {
        if (parseInt(colorId) === color.id) {
=======
  render() {
    let { product } = this.props
    if (!product) {
      return null;
    } else if (!this.state.currentColor) {
      product.colors.forEach(color => {
        if (parseInt(this.state.colorId) === color.id) {
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
          this.setState({ currentColor: color.color_name });
            // HAVING THIS IN THE RENDER IS CAUSING A WARNING!!
          photo1 = color.photo1Url;
          photo2 = color.photo2Url;
          photo3 = color.photo3Url;
          photo4 = color.photo4Url;
        }
      })
    }


    let image;
    let photo1;
    let photo2;
    let photo3;
    let photo4;


    product.colors.forEach(color => { 
<<<<<<< HEAD
        if (parseInt(colorId) === color.id) {
=======
        if (parseInt(this.state.colorId) === color.id) {
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
          photo1 = color.photo1Url;
          photo2 = color.photo2Url;
          photo3 = color.photo3Url;
          photo4 = color.photo4Url;
        }
    })


<<<<<<< HEAD
    switch (currentPhoto) {
      case 1:
        image = <img className='scroll-picture' src={photo1} alt='eyewear-picture' />
        break;
      case 2:
        image = <img className='scroll-picture' src={photo2} alt='eyewear-picture' />
        break;
      case 3:
        image = <img className='scroll-picture' src={photo3} alt='eyewear-picture' />
        break;
      case 4:
=======
    switch (this.state.currentPhoto) {
      case 'photo1':
        image = <img className='scroll-picture' src={photo1} alt='eyewear-picture' />
        break;
      case 'photo2':
        image = <img className='scroll-picture' src={photo2} alt='eyewear-picture' />
        break;
      case 'photo3':
        image = <img className='scroll-picture' src={photo3} alt='eyewear-picture' />
        break;
      case 'photo4':
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
        image = <img className='scroll-picture' src={photo4} alt='eyewear-picture' />
        break;
    };


    let details = product.details.split('#')
    let plan = Math.round(product.price / 3)

    let dataInfo = {
      addFunction: this.props.createCartItem,
      product,
<<<<<<< HEAD
      photos: [photo1, photo2, photo3, photo4],
=======
      colorPhoto: photo3,
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      // pickedColor: parseInt(this.state.colorId)
      pickedColor: this.state.currentColor
    }



    return (
      <div className='index-body'>
        <div className='top' >
          <div className='pictures-container'>
          <div className='pictures'>
<<<<<<< HEAD
            <div className='arrow' id='left-arrow' onClick={this.arrowClick('left')} style={{ cursor: window.left }} ></div>
              <div className='arrow' id='right-arrow' onClick={this.arrowClick('right')} ></div>
            {image}
          </div>
            <div className='options-colors'>
              <input type='radio' name='photo-radios' value='1' onClick={this.handlePhoto(1)} checked={currentPhoto === 1}/>
              <input type='radio' name='photo-radios' value='2' onClick={this.handlePhoto(2)} checked={currentPhoto === 2}/>
              <input type='radio' name='photo-radios' value='3' onClick={this.handlePhoto(3)} checked={currentPhoto === 3}/>
              <input type='radio' name='photo-radios' value='4' onClick={this.handlePhoto(4)} checked={currentPhoto === 4}/>
=======
            {image}
          </div>
            <div className='options-colors'>
              <input type='radio' name='photo-radios' value='photo1' onClick={this.handlePhoto(1)} defaultChecked/>
              <input type='radio' name='photo-radios' value='photo2' onClick={this.handlePhoto(2)} />
              <input type='radio' name='photo-radios' value='photo3' onClick={this.handlePhoto(3)} />
              <input type='radio' name='photo-radios' value='photo4' onClick={this.handlePhoto(4)} />
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
            </div>
          </div>
            <div className='r-side'>
              <h2 className='product-name'>{product.name}</h2>
              <h5 className='product-color'>{this.state.currentColor}</h5>
              <div className='radio-cont'>
<<<<<<< HEAD
                
                {product.colors.map((color, idx) => {
                  return (
                  <div className={`circle-highlight ${parseInt(this.state.colorId) === color.id ? 'circle-selected' : ''}`} onClick={this.handleClick(color.id, color.color_name)}>
                    <input type="radio"
                    className='radio-color-options'
                    name={`radio-${product.id}`} 
                    key={color.id}
                    defaultChecked={color.id === parseInt(this.state.colorId) ? 'checked' : ''}
                    />  
                    <div className={`select-circle ${color.id}-circle`} style={{ backgroundColor: colorCode(color.colorCode.id) }}></div>
                  </div>

                  )
                // <input 
                //   type='radio'
                //   name='color-radios'
                //   className='color-radios'
                //   onClick={this.handleClick(color.id, color.color_name)}
                //   key={idx}
                //   // checked={`${color.id === parseInt(this.state.colorId)}`} />)}
                //   defaultChecked={color.id === parseInt(this.state.colorId) ? 'checked' : ''} />
                })}
=======
                {product.colors.map((color, idx) => <input 
                  type='radio'
                  name='color-radios'
                  className='color-radios'
                  onClick={this.handleClick(color.id, color.color_name)}
                  key={idx}
                  // checked={`${color.id === parseInt(this.state.colorId)}`} />)}
                  defaultChecked={color.id === parseInt(this.state.colorId) ? 'checked' : ''} />)}
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
              </div>
              <p className='price-desc'>Starting at ${product.price}, including prescription lenses or 3 payments of ${plan}</p>
                {/* <AddItemForm product={product} colorPhoto={photo3} pickedColor={this.state.currentColor} createCartItem={this.props.createCartItem} /> */}
                <button className='purchase' onClick={() => this.props.openModal('buyItem', dataInfo)} >Select lenses and purchase</button>
                <button className='try-on' >Try at home for free</button>
            </div>
        </div>
        <div className='middle-details' >
          <div className='white-box'>
<<<<<<< HEAD
            <h5 className='bottom-note-title' >{details[0]}</h5>
          </div>
        </div>
        <div className='middle-grey' >
          <div className='info-grey'>
            <img className='grey-picture' src={photo3} alt='eyewear-picture' />
          </div>
          <h5 className='bottom-note-title' >{details[1]}</h5>
        </div>
=======
            <h5 className='serif' >{details[0]}</h5>
          </div>
        </div>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
        {/* <div className='bottom-details' >
          <div className='bottom-text'>
            <h5 className='serif-detail' >We offer a variety of prescription and lense types</h5>
            <p>Need to renew your prescription? We have an app that lets tou do it from home</p>
            
            <div>
              <h5 className='sans-details'>Prescription type</h5>
              <ul>
                <li>Non-prescription</li>
                <li>Single-vision</li>
                <li>Progressives</li>
                <li>Readers</li>
              </ul>
            </div>
            <div>
              <h5 className='sans'>Lense material</h5>
              <ul>
                <li>Polycarbonate</li>
                <li>1.67 high-index</li>
              </ul>
            </div> */}

            <div className='bottom'>
<<<<<<< HEAD
              <div className='options-information'>
                <div className='options-2'>
                <h3 className='bottom-note-title'>We offer a variety of prescription and lens types</h3>
                <div className='bottom-head-div'>
                  <p className='bottom-head'>Prescription type</p>
                  <ul>
                    <li>Single-vision</li>
                    <li>Progressives</li>
                    <li>Readers</li>
                    <li>Non-prescription</li>
                  </ul>
                </div>
                <div className='bottom-head-div'>
                  <p className='bottom-head'>Lens type</p>
                  <ul>
                    <li>Classic</li>
                    <li>Blue-light-filtering</li>
                    <li>Light-responsive</li>
                  </ul>
                </div>
                <div className='bottom-head-div'>
                  <p className='bottom-head'>Lens material</p>
                  <ul>
                    <li>Polycarbonate</li>
                    <li>1.67 high-index</li>
                  </ul>
                </div>
                </div>
                <div className='info-img'>
                  <img className='btm-picture' src={photo1} alt='eyewear-picture' />
                </div>
              </div>
              <img className='bottom-img' src={window.case} />
              <h3 className='bottom-note-title center-title'>Everything that's included</h3>
=======
              <img src={window.case} />
              <h3 className='bottom-note-title'>Everything that's included</h3>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
              <p className='bottom-note'>Each pair of sunglasses comes with a frame case and lens cloth.
                 We also offer free shipping and a 30-day, hassle-free return or
                 exchange policy as well as a one-year, no scratch guarantee for
                 our lenses; we'll replace your scratched lenses for free within the first 12 months.</p>
            </div>
          </div>
        // </div>
      // </div>
    )
  }
}


// export default withRouter(ProductShow);
export default ProductShow; //--> breaks page