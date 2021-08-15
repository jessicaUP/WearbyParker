import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import SearchModalContainer from '../search_filter/search_modal_container'
import AddItemForm from '../cart/add_item_form'
import Thanks from '../splash/thanks'
=======
import SearchModal from '../search_filter/search_modal'
import AddItemForm from '../cart/add_item_form'
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.selectModal = this.selectModal.bind(this)

  }

  selectModal(modal) {
<<<<<<< HEAD
    let { product, photos, pickedColor, addFunction, cartId } = modal.data;
    
    switch (modal.modal) { 
      case 'search':
        return <SearchModalContainer 
                  // closeModal={this.props.closeModal} 
                  // fetchSearchProducts={this.props.fetchSearchProducts}
                  // products={this.props.products}
                  />
      case 'buyItem':
        return <AddItemForm 
                  product={product}
                  photos={photos} 
=======
    let { product, colorPhoto, pickedColor, addFunction } = modal.data;
    switch (modal.modal) {
      case 'search':
        return <SearchModal />
      case 'buyItem':
        return <AddItemForm 
                  product={product}
                  colorPhoto={colorPhoto} 
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
                  pickedColor={pickedColor}
                  createCartItem={addFunction}
                  closeModal={this.props.closeModal}
                  />
<<<<<<< HEAD
      case 'thanks':
        return <Thanks 
                  closeModal={this.props.closeModal}
                  deleteCart={this.props.deleteCart}
                  cartId={cartId} />
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      default:
        return null;
    }
  }


  render() {
<<<<<<< HEAD
    
    let { modal } = this.props;
    if ( !modal.modal) return null;
=======

    let { modal } = this.props;
    if ( !modal.modal ) return null;
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

    let modalElement = this.selectModal(modal);

    return (
      <div className="modal-background" >
          {modalElement}
      </div>
    )
  }
}

export default Modal;