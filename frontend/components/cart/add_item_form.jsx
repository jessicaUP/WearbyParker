import React, { useEffect } from "react";
import ProductShow from "../products/product_show";
import { prescriptionOptions, lenseOptions, materialOptions } from '../../util/checkout_options';
// import { createCartItem } from '../../actions/cart_item_actions';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formPage: 1,
      pageWidth: this.sizeLabel(window.innerWidth),
      cartItem: {
        frame_width: null,
        prescription_type: '',
        lense_type: '',
        lense_material: '',
        products_color_id: null,  

      },
      totalPrice: 0,
      cost: []


    };

    this.handleClick = this.handleClick.bind(this);
    this.exitForm = this.exitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sizeLabel = this.sizeLabel.bind(this);
    this.selectionPages = this.selectionPages.bind(this);
    // this.leftRender = this.leftRender.bind(this);
    // this.rightRender = this.rightRender.bind(this);
    this.combineForm = this.combineForm.bind(this);
    this.changeResize = this.changeResize.bind(this);

  }

  handleClick(type, num, price = 0, baseCost = null) {
    return (e) => {
      e.preventDefault();
      let costArr = this.state.cost;
      let nextCost;
      if (price === 0 && type !== 'frame_width') {
        nextCost = 'Free'
      } else if (type === 'frame_width') {
        price = baseCost + price;
        nextCost = `$${price}`
      } else {
        nextCost = `$${price}`;
      }
      
      costArr.push(nextCost); 


        let oldState = Object.assign({}, this.state )
        let newState = Object.assign({}, oldState, { 
          cartItem: Object.assign({}, this.state.cartItem, { [type]: e.target.value }),
          totalPrice: (this.state.totalPrice + price),
          cost: costArr,
          formPage: num
        })
        this.setState(newState)
    }
  }

  exitForm() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();

    }
  }

  backForm() {
    return (e) => {
      e.preventDefault();
      this.setState({ formPage: (this.state.formPage - 1) })
    }
  }

  startForm() {
    return (e) => {
      e.preventDefault();
      this.setState({ formPage: 1 })
    }
  }


  handleSubmit() {

    return (e) => {
      e.preventDefault();
      let colorName = this.props.pickedColor
      let colorId;
      this.props.product.colors.forEach(color => {
        if (color.color_name === colorName) {
          colorId = color.id
        }
      });

      let fw_id;
      switch (this.state.cartItem.frame_width) {
        // GET THROUGH BACKEND WHEN HAVE TIME
        case 'Extra narrow':
          fw_id = 1;
          break;
        case 'Narrow':
          fw_id = 2;
          break;
        case 'Medium':
          fw_id = 3;
          break;
        case 'Wide':
          fw_id = 4;
          break;
        case 'Extra wide':
          fw_id = 5;
          break;
      }

      
      this.props.createCartItem({
        product_id: this.props.product.id,
        price: this.state.totalPrice,
        products_color_id: colorId,
        products_frame_width_id: fw_id,
        prescription_type: this.state.cartItem.prescription_type,
        lense_type: this.state.cartItem.lense_type,
        lense_material: this.state.cartItem.lense_material
      })

      // this.props.pickedColor
      // this.props.product.colors

      // REDIRECT GOES HERE
      // let header = document.querySelector('.total-menu');
      // header.style.display = 'flex';
    
      this.props.closeModal()
      // .then(location.assign("http://localhost:3000/#/carts"))
      location.assign("http://localhost:3000/#/carts")

    }

  };


  sizeLabel() {
    let label;
    if (window.innerWidth < 950) {
      label = 'small';
    } else {
      label = 'large';
    }
    return label;
  }

  selectionPages(pageNum) {
    // let { modal } = this.props
    let product = this.props.product;

    let { cartItem, totalPrice, cost } = this.state;
    let nextPage = pageNum + 1;
    let title, options;

    
    // let data = {
    //   product,
    //   colorPhoto: photo3,
    //   pickedColor: this.state.currentColor
    // }
    switch(pageNum) {
      case 1:
        // FRAME WIDTH
        title = 'Select a frame width'
        options = product.frameWidths.map((frameWidth) => {
          return (
            {
              type: 'frame_width',
              name: frameWidth.frame_width,
              priceName: '',
              desc: frameWidth.description
            }
          )
        });
        break;
      case 2:
        // PRESCRIPTION
        title = 'Select a prescription type'
        options = prescriptionOptions;
        break;
      case 3:
        // LENSE TYPE
        title = 'Select a lens type'
        options = lenseOptions;
        break;
      case 4:
        // LENSE MATERIAL
        title = 'Select a lens material'
        options = materialOptions;
        break;
      case 5:
        return (
          <>
             {/* <button className='icon-button' onClick={this.backForm()}>←</button>
             <button className='icon-button' onClick={this.exitForm()}>X</button> */}
             <h2 className='section-title'>Review your selections</h2>
             <p className='option-description' id='info-cart'>With every pair, you'll get free shipping, hassle-free returns, and our one-year, no-scratch guarantee</p>
             <div className='cart-selections'>
               {/* <h2>{product.name}</h2> */}
               <label className='subtitle'>Frame width
                 <p className='option-description' id='p-option'>{cartItem.frame_width}</p>
                 <input type='hidden' value={cartItem.frame_width.id} />
               </label>
             </div>
             <div className='cart-selections'>
               <label className='subtitle'>Prescription
               <div className='option-pricing' >
                 <p className='option-description' id='p-option'>{cartItem.prescription_type}</p>
                 <p className='option-description' id='p-price'>{cost[0]}</p>
                 <input type='hidden' value={cartItem.prescription_type} />
               </div>
               </label>
             </div>
             <div className='cart-selections'>
               <label className='subtitle'>Lense type
               <div className='option-pricing' >
                 <p className='option-description' id='p-option'>{cartItem.lense_type}</p>
                 <p className='option-description' id='p-price'>{cost[1]}</p>
                 <input type='hidden' value={cartItem.lense_type} />
               </div>
               </label>
             </div>
             <div className='cart-selections'>
               <label className='subtitle'>Lense material
               <div className='option-pricing' >
                 <p className='option-description' id='p-option'>{cartItem.lense_material}</p>
                 <p className='option-description' id='p-price'>{cost[2]}</p>
                 <input type='hidden' value={cartItem.lense_material} />
               </div>
               </label>
             </div>
             <hr />
             <div className='sub-total' id='sub-final'>
               <p id='sub'>Subtotal</p>
               <p id='sub'>${totalPrice}</p>
             </div>
             <button className='cart-button' id='buy-button' onClick={this.handleSubmit()}>Add to cart: ${totalPrice}</button>
             <button className='cart-button' id='back-button' onClick={this.startForm()}>Edit Selections</button>
           </>
        )
    }

  


    let finalOptions = options.map((option, idx) => {
      let { type, name, price, priceName, desc } = option;
      return (
        <div className='cart-options' id={idx}>
          <button className='selection-button' onClick={this.handleClick(type, nextPage, price, product.price)} value={name}>{name}</button>
          <p className='option-price'>{priceName}</p>
          <p className='option-description'>{desc}</p>
        </div>
      )
    })

    return (
      <div className='cart-selection' >
        {finalOptions}
      </div>
    )
  }

  
  // componentDidMount() {
    
    // }
    
  combineForm(formNum, photoName) {
    window.addEventListener("resize", this.changeResize);
    const { product } = this.props.product;
    const { formPage } = this.state;
    let photo = this.props[photoName];
    let title;
    let page;

    switch (formNum) {
      case 1:
        // FRAME WIDTH
        title = 'Select a frame width'
      case 2:
        // PRESCRIPTION
        title = 'Select a prescription type'
        break;
      case 3:
        // LENSE TYPE
        title = 'Select a lens type'
        break;
      case 4:
        // LENSE MATERIAL
        title = 'Select a lens material'
        break;
    }

    // let header1;
    // let header2;

    //   <button className='icon-button' onClick={this.backForm()}>←</button>
    //   <button className='icon-button' onClick={this.exitForm()}>X</button>
    
    let smallHeader;
    let back;

    if (formNum === 1) {
      back = '';
    } else if (formNum > 1) {
      back = <button className='icon-button' onClick={this.backForm()}>←</button>
    }
    
    if (window.innerWidth < 900) {
      smallHeader = <p className='small-name'>{this.props.product.name}</p>
    } else {
      smallHeader = '';
    }

      
    if (formNum > 0) {
      return (
        <div className='add-cart-item'>
          <div className='back-exit' >
            {back}
            {smallHeader}
            <button className='icon-button' onClick={this.exitForm()}>X</button>
          </div>
          <div className='left-select-item-l' id='left-top'>
            <img src={photo} className='selection-photo' />
            <div className='name-color-l'>
              <h2 className='section-title'>{this.props.product.name}</h2>
              <p className='option-color' >{this.props.pickedColor}</p>
            </div>
          </div>
          <div className='right-select-item-l' id='right-bottom'>
            {/* {header1} */}
            <h2 className='section-title'>{title}</h2>
            {this.selectionPages(formNum)}
            


          </div>


        </div>
    )
    }
  }

  changeResize() {
    let wWidth = this.sizeLabel();
    if (wWidth === 'small' && this.state.formPage > 0) {
      let right = document.querySelector('#right-bottom');
      let total = document.querySelector('#left-top');
      // $('#left-top').addClass('left-select-item-s')
      // $('#left-top').removeClass('left-select-item-l')
      $('#right-bottom').toggleClass('right-select-item-l right-select-item-s')
      // this.setState({ pageWidth: wWidth })
      console.log('booyah')
    } else {

    }
    return;
  };
  
  render() {
    const { product } = this.props;
    const { formPage } = this.state;
    
    return this.combineForm(formPage, 'colorPhoto');
  }
}

export default AddItemForm;




// rightRender() {
//   let windowWidth = window.innerWidth;
//   const { product } = this.props
//   const { totalPrice, cartItem } = this.state

//   let options = product.frameWidths.map((frameWidth, idx) => {
//     return (
//       <div key={idx} className='cart-options'>
//         <button className='selection-button' onClick={this.handleClick('frame_width', 2)} value={frameWidth.frame_width} >{frameWidth.frame_width}</button>
//         <p className='option-description'>{frameWidth.description}</p>
//       </div>
//     )
//   });

//   if (windowWidth < 950) {
//     switch (this.state.formPage) {
//       case 1:
//         return (
//           <div className='right-select-item-s'>
//             <h2 className='section-title'>Select a frame width</h2>
//             {options}
//           </div>
//         );
//       case 2:
//         return (
//           <div className='right-select-item-s'>
//             <button className='icon-button' onClick={this.backForm()}>←</button>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='option-title'>Select a prescription type</h2>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Single-vision'>Single-vision</button>
//               <p className='option-price'>$95</p>
//               <p className='option-desc'>Corrects one field of vision (near, intermediate, or distance)</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 295)} value='Progressives'>Progressives</button>
//               <p className='option-price'>$295</p>
//               <p className='option-desc'>Correct near, intermediate, and distance fields of vision in one lens so you don't have to switch between multiple pairs</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Non-prescription'>Non-prescription</button>
//               <p className='option-price'>$95</p>
//               <p className='option-desc'>Offers style and protection with no vision correction</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Readers'>Readers</button>
//               <p className='option-price'>$95</p>
//               <p className='option-desc'>Offers simple magnification for, well, reading (no prescription necessary)</p>
//             </div>
//           </div>
//         );
//       // case 3:
//       //   return (

//       //   );
//       // case 4:
//       //   return (

//       //   );
//     }

//   } else { // BIGGER
//     switch (this.state.formPage) {
//       case 1:
//         return (
//           <div className='right-select-item-l'>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='section-title'>Select a frame width</h2>
//             {options}
//           </div>
//         );
//       case 2:
//         return (
//           <div className='right-select-item-l'>
//             <button className='icon-button' id='back-button' onClick={this.backForm()}>←</button>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='section-title'>Select a prescription type</h2>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Single-vision' className='selection-button' >Single-vision</button>
//               <p className='option-price'>$95</p>
//               <p className='option-description'>Corrects one field of vision (near, intermediate, or distance)</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 295)} value='Progressives' className='selection-button' >Progressives</button>
//               <p className='option-price'>$295</p>
//               <p className='option-description'>Correct near, intermediate, and distance fields of vision in one lens so you don't have to switch between  multiple pairs</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Non-prescription' className='selection-button' >Non-prescription</button>
//               <p className='option-price'>$95</p>
//               <p className='option-description'>Offers style and protection with no vision correction</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('prescription_type', 3, 95)} value='Readers' className='selection-button' >Readers</button>
//               <p className='option-price'>$95</p>
//               <p className='option-description'>Offers simple magnification for, well, reading (no prescription necessary)</p>
//             </div>
//           </div>

//         );
//       case 3:
//         return (
//           <div className='right-select-item-l'>
//             <button className='icon-button' onClick={this.backForm()}>←</button>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='section-title'>Select a lens type</h2>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('lense_type', 4)} value='Classic' className='selection-button' >Classic</button>
//               <p className='option-price'>Free</p>
//               <p className='option-description'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('lense_type', 4, 295)} value='Blue-light-filtering' className='selection-button' >Blue-light-filtering</button>
//               <p className='option-price'>+$50</p>
//               <p className='option-description'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays; they also filter more blue light from digital screens and the sun then our classic or light-responsive lenses.</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('lense_type', 4, 95)} value='Light-responsive' className='selection-button' >Light-responsive</button>
//               <p className='option-price'>+$100</p>
//               <p className='option-description'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays and the transition from clear to a darker tint outdoors</p>
//             </div>
//             <div className='sub-total'>
//               <p id='sub'>Subtotal</p>
//               <p id='sub'>{`$${totalPrice}`}</p>
//             </div>
//           </div>
//         );
//       case 4:
//         return (
//           <div className='right-select-item-l'>
//             <button className='icon-button' onClick={this.backForm()}>←</button>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='section-title'>Select a lens material</h2>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('lense_material', 5)} value='Polycarbonate' className='selection-button' >Polycerbonate</button>
//               <p className='option-price'>Free</p>
//               <p className='option-description'>High-quality and impact-resistant</p>
//             </div>
//             <div className='cart-options'>
//               <button onClick={this.handleClick('lense_material', 5, 30)} value='1.67 high-index' className='selection-button' >1.67 high-index</button>
//               <p className='option-price'>+$30</p>
//               <p className='option-description'>Thinner lenses recommended tor strong prescription (if total power if +/-4.0 or higher)</p>
//             </div>
//             <div className='sub-total'>
//               <p id='sub'>Subtotal</p>
//               <p id='sub'>{`$${totalPrice}`}</p>
//             </div>
//           </div>
//         );
//       case 5:
//         return (
//           <div className='right-select-item-l'>
//             <button className='icon-button' onClick={this.backForm()}>←</button>
//             <button className='icon-button' onClick={this.exitForm()}>X</button>
//             <h2 className='section-title'>Review your selections</h2>
//             <p className='option-description' id='info-cart'>With every pair, you'll get free shipping, hassle-free returns, and our one-year, no-scratch guarantee</p>
//             <div className='cart-selections'>
//               {/* <h2>{product.name}</h2> */}
//               <label className='sub-title'>Frame width
//                 <p className='option-description' id='p-option'>{cartItem.frame_width}</p>
//                 <input type='hidden' value={cartItem.frame_width.id} />
//               </label>
//             </div>
//             <div className='cart-selections'>
//               <label className='subtitle'>Prescription
//                 <p className='option-description' id='p-option'>{cartItem.prescription_type}</p>
//                 <input type='hidden' value={cartItem.prescription_type} />
//               </label>
//             </div>
//             <div className='cart-selections'>
//               <label className='subtitle'>Lense type
//                 <p className='option-description' id='p-option'>{cartItem.lense_type}</p>
//                 <input type='hidden' value={cartItem.lense_type} />
//               </label>
//             </div>
//             <div className='cart-selections'>
//               <label className='subtitle'>Lense material
//                 <p className='option-description' id='p-option'>{cartItem.lense_material}</p>
//                 <input type='hidden' value={cartItem.lense_material} />
//               </label>
//             </div>
//             <hr />
//             <div className='sub-total' id='sub-final'>
//               <p id='sub'>Subtotal</p>
//               <p id='sub'>${totalPrice}</p>
//             </div>
//             <button className='cart-button' id='buy-button' onClick={this.handleSubmit()}>Add to cart: ${totalPrice}</button>
//             <button className='cart-button' id='back-button' onClick={this.startForm()}>Edit Selections</button>
//           </div>
//         );

//     }
//   }




// };