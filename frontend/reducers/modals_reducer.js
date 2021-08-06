import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

let beginState = { modal: null }
const modalReducer = (state = beginState, action) => {
  
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal }; 
    case CLOSE_MODAL:
      return beginState;
    default:
      return state;
  }
}

export default modalReducer