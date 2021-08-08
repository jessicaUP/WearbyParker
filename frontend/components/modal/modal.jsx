import React from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../search_filter/search_modal'
import AddItemForm from '../cart/add_item_form'


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.selectModal = this.selectModal.bind(this)

  }

  selectModal(modal) {
    let { product, colorPhoto, pickedColor, addFunction } = modal.data;
    switch (modal.modal) {
      case 'search':
        return <SearchModal />
      case 'buyItem':
        return <AddItemForm 
                  product={product}
                  colorPhoto={colorPhoto} 
                  pickedColor={pickedColor}
                  createCartItem={addFunction}
                  closeModal={this.props.closeModal}
                  />
      default:
        return null;
    }
  }


  render() {

    let { modal } = this.props;
    if ( !modal.modal ) return null;

    let modalElement = this.selectModal(modal);

    return (
      <div className="modal-background" >
          {modalElement}
      </div>
    )
  }
}

export default Modal;