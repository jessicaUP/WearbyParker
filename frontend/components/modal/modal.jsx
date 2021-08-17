import React from 'react';
import { Link } from 'react-router-dom';
import SearchModalContainer from '../search_filter/search_modal_container'
import AddItemForm from '../cart/add_item_form'
import Thanks from '../splash/thanks'


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.selectModal = this.selectModal.bind(this)

  }

  selectModal(modal) {
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
                  pickedColor={pickedColor}
                  createCartItem={addFunction}
                  closeModal={this.props.closeModal}
                  />
      case 'thanks':
        return <Thanks 
                  closeModal={this.props.closeModal}
                  deleteCart={this.props.deleteCart}
                  cartId={cartId} />
      case 'tryItem':
        return <AddItemForm
          product={product}
          photos={photos}
          pickedColor={pickedColor}
          createCartTryonItem={addFunction}
          closeModal={this.props.closeModal}
        />
      default:
        return null;
    }
  }


  render() {
    
    let { modal } = this.props;
    if ( !modal.modal) return null;

    let modalElement = this.selectModal(modal);

    return (
      <div className="modal-background" >
          {modalElement}
      </div>
    )
  }
}

export default Modal;