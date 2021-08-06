import React from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../search_filter/search_modal'


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.selectModal = this.selectModal.bind(this);

  }

  selectModal(modalName) {
    switch (modalName) {
      case 'search':
        return <SearchModal />
      default:
        return null;
    }
  }


  render() {

    let { modal, closeModal } = this.props;
    if ( !modal ) return null;

    let modalElement = this.selectModal(modal);

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-cancel" onClick={e => e.stopPropagation()}>
          {modalElement}
        </div>
      </div>
    )
  }
}

export default Modal;